import {encryptCookie, decryptCookie} from 'cookie-encrypter'
import {CookieOptions, Request, Response} from 'express';
import {ErrorHandler} from '../errors/errorHandler';

/*
 * Our cookie service class will deal with cookie handling during requests to the token endpoint
 */
export class CookieService {

    private readonly _authCookieName = 'mycompany-auth';
    private readonly _csrfCookieName = 'mycompany-csrf';
    private readonly _rootDomain: string;
    private readonly _encryptionKey: Buffer;

    public constructor(rootDomain: string, base64encryptionKey: string) {
        this._rootDomain = rootDomain;
        this._encryptionKey = Buffer.from(base64encryptionKey, 'base64');
    }

    /*
     * Write a same domain response cookie containing the refresh token
     */
    public writeAuthCookie(clientId: string, refreshToken: string, response: Response): void {

        const encryptedData = encryptCookie(refreshToken, {key: this._encryptionKey});
        response.cookie(`${this._authCookieName}-${clientId}`, encryptedData, this._getCookieOptions());
    }

    /*
     * Read the refresh token from the request cookie
     */
    public readAuthCookie(clientId: string, request: Request): string {

        const cookieName = `${this._authCookieName}-${clientId}`;
        if (request.cookies) {
            const encryptedData = request.cookies[`${this._authCookieName}-${clientId}`];
            if (encryptedData) {
                return this._decryptCookie(cookieName, encryptedData);
            }
        }

        throw ErrorHandler.fromMissingCookieError('No auth cookie was found in the incoming request');
    }

    /*
     * Write a CSRF cookie to make it harder for malicious code to post bogus forms to our token refresh endpoint
     */
    public writeCsrfCookie(clientId: string, response: Response, value: string): void {

        const encryptedData = encryptCookie(value, {key: this._encryptionKey});
        response.cookie(`${this._csrfCookieName}-${clientId}`, encryptedData, this._getCookieOptions());
    }

    /*
     * Write a response cookie containing a CSRF value, which we will verify during refresh token requests
     */
    public readCsrfCookie(clientId: string, request: Request): string {

        const cookieName = `${this._csrfCookieName}-${clientId}`;
        if (request.cookies) {
            const encryptedData = request.cookies[`${this._csrfCookieName}-${clientId}`];
            if (encryptedData) {
                return this._decryptCookie(cookieName, encryptedData);
            }
        }

        throw ErrorHandler.fromMissingCookieError('No CSRF cookie was found in the incoming request');
    }

    /*
     * Corrupt the refresh token inside the cookie by adding extra bytes to it
     * This will cause an invalid_grant error when the refresh token is next sent to the Authorization Server
     */
    public expire(clientId: string, refreshToken: string, request: Request, response: Response): void {

        const expiredRefreshToken = `x${refreshToken}x`;
        this.writeAuthCookie(clientId, expiredRefreshToken, response);
    }

    /*
     * Clear all cookies when the user session expires
     */
    public clearAll(clientId: string, response: Response): void {

        response.clearCookie(`${this._authCookieName}-${clientId}`, this._getCookieOptions());
        response.clearCookie(`${this._csrfCookieName}-${clientId}`, this._getCookieOptions());
    }

    /*
     * Both our auth cookie and CSRF cookie use the same options
     */
    private _getCookieOptions(): CookieOptions {

        return {

            // The cookie cannot be read by Javascript code
            httpOnly: true,

            // The cookie can only be sent over an HTTPS connection
            secure: true,

            // The cookie written by this app will be sent to other web applications
            domain: `.${this._rootDomain}`,

            // The cookie is only used for OAuth token renewal requests, and not for Web / API requests
            path: '/reverse-proxy',

            // Other domains cannot send the cookie, which reduces cross site scripting risks
            sameSite: 'strict',
        };
    }

    /*
     * A helper method to decrypt a cookie and report errors clearly
     */
    private _decryptCookie(cookieName: string, encryptedData: string) {

        try {
            return decryptCookie(encryptedData, {key: this._encryptionKey});

        } catch (e) {
            throw ErrorHandler.fromCookieDecryptionError(cookieName, e);
        }
    }
}
