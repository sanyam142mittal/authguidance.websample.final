import {LambdaEdgeRequest} from '../edge/lambdaEdgeRequest';
import {LambdaEdgeResponse} from '../edge/lambdaEdgeResponse';
import {ProxyService} from './proxyService';

/*
 * Return mock responses on a developer PC
 */
export class MockProxyServiceImpl implements ProxyService {

    /*
     * For local development, return a hard coded response in line with our test JSON files
     */
    public async sendAuthorizationCodeGrant(request: LambdaEdgeRequest, response: LambdaEdgeResponse): Promise<any> {

        return {
            id_token: 'eyJraWQiOiJKYkRZVVd0MVIwbUd1M0tYckJrUjNzcEpPXC9TWEprZlwvZW0weVRSZUxlZG89IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiSGdUQTlTTjBuSTF3aVBNYlQwTkYtUSIsInN1YiI6IjkzNGIxODcxLTFhODEtNGI1Zi1hMTYyLTRiMjMxZjVkYzJkMCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl9tWjNOQllwVG8iLCJjb2duaXRvOnVzZXJuYW1lIjoiOTM0YjE4NzEtMWE4MS00YjVmLWExNjItNGIyMzFmNWRjMmQwIiwiZ2l2ZW5fbmFtZSI6Ikd1ZXN0IiwiYXVkIjoiMTd0ZG1ycHJoY2M3ZmsyZHJjN240Ym12N2YiLCJldmVudF9pZCI6ImVlOTYxZmY2LTMyMGEtNDA0Mi1hMjY3LTQ1NzBjNzI2OGJkNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTk1MTkxOTA4LCJleHAiOjE1OTUxOTU1MDgsImlhdCI6MTU5NTE5MTkwOCwiZmFtaWx5X25hbWUiOiJVc2VyIiwiZW1haWwiOiJndWVzdHVzZXJAYXV0aGd1aWRhbmNlLmNvbSJ9.H4zLNenXKeqhZfT8pbmOQ7D-TI9Uh8FoMICb-v4FU59PdBgpmDmYCP_ehuy3HyFQuypbr5KGftFBsffLL9m-Oha65GWl2qcnn4KxI20Ir0HjpFZehkq9ti-0nVTc6zlMvN-_I0RetqLpmtwDNt3tIIzmRt0D8b7_wCwOb1OCsP-hUf6saW0lew7ksjEeKepVkHpnL0yXenhzWeD3FXQaJX3ThGLrOf-elmaBn1NXEhnYuFIDob1HDaxN1IwQlgFHqM50XmjmcKJhmQt4VcXMTDRaNplXwQNfmi-Mfk5ul3vrcFfDCn-Wo1illTIW18Fh8ywVuwiT6vJr_aGjflbWyA',
            access_token: 'eyJraWQiOiJvNWh6MGNBeUQ5WVI4emZpbTNEdXNVTzhFeFg4UUtXV2dpbjdFaUxVTk5vPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5MzRiMTg3MS0xYTgxLTRiNWYtYTE2Mi00YjIzMWY1ZGMyZDAiLCJldmVudF9pZCI6ImVlOTYxZmY2LTMyMGEtNDA0Mi1hMjY3LTQ1NzBjNzI2OGJkNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE1OTUxOTE5MDgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX21aM05CWXBUbyIsImV4cCI6MTU5NTE5NTUwOCwiaWF0IjoxNTk1MTkxOTA4LCJ2ZXJzaW9uIjoyLCJqdGkiOiI4MjRiYTgxYS03Y2EyLTQ4NWEtODg3Yi04ZmFmNDRhZTg0MTMiLCJjbGllbnRfaWQiOiIxN3RkbXJwcmhjYzdmazJkcmM3bjRibXY3ZiIsInVzZXJuYW1lIjoiOTM0YjE4NzEtMWE4MS00YjVmLWExNjItNGIyMzFmNWRjMmQwIn0.Gq3zWxhed6UzP0BT7An9iz5DDDaZmDtDGjaxoBmFwUSN05Mp2A-F-P-fPyNsj0aKeA8reqHKYU1Mh4uuu6sPHfDbRBkb6z1A7NC_XBVEAlxwyd_IIvxqpstIXb83Dk0mZmBXBcElyzLNrXLHPK-fqv635i0vkMXlcqpohh0hw-3xrlC3I4kgqaJfpUm-CY23VciX_wrcjxYlBALzVuSHLfx47Mi4qtQU8apUEBjDvRt5St7t1vDEqoXlaUgLnTCow3iaclzJv4LCd1boual4DjWAqubvGrvUBxLJiBsv7k1L1bU4noLej8fhpFBHXFwBQ4Hv_Bl-iXaIs45np8ft2A',
            refresh_token: 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.c5VEzbdMpa7WQ2v0pKd6PxT_0kghxD8mUUQah6frDHx2pshlt1rj1eUBsjUFleS4f7uQxyXbdxux41Rb7mhRHJxqsDP8lw_C5MCG9d1LB88VK4wrt-pScp2DDshwj5E8f6kyXu8mmDyd2ha1AhjgoUmwW285k0twEd4TtAuwom8e0lPFMhxoCrPIYkOMmZbNcK0rGBztQKtFiZsis9G5DkoYEZ2JSSHhyaPnMkkEpCA02WamRd_PY8OZVjEo_crz9qqRNzz-_AuWWjO7TsYS87DD5-CDsEVsd-kzL1cVz5Ng0XOA7Z1SD_DQcNQ2m8fUFx-afWHoqPBzfSP4Upf_Nw.HGmi9gVSqn-VxtQO.PBf6hbhKDc8dkjcYem0J099cD9f6ZFdqMvFQ904WP5cmtYZKQvcJnpv77_OJpov4CiawsztZUTxyczqMiW5WC102yuUV1LHfejnS9_Rual4eBi1jlgPDnRq9vxXnWoinUJTY7XAEYEMioCEHrGoRM1EXLY3Qr0jf-XYTXeB-xKIZecKbY70l4coVwb_V5opzIN8QPNKbLvHe-HDALRClhwfFMr3M80dqNGM45FwsdWXl116elcauVvWI1UQ9EoyBmaO-Xnp68_BT86gwlnENpLW2eCGK70tCVGOj5dwDv-9HiY_LOyJIpKrh5dR1H8Hh02VpIwUfmVs-_8SMBX1mie-9eejyQjLgSYoB3x0M6yKrA2d7RnzOW6DSwhHYvsIUeSUae9V9elZGK54zkgrdfHxJq5aXKjLOz-G0205hgZbdm4rhoZqYqxKUPgPBXKRBoFrFfd6YffDMkSUL6V3GfsEH19b4WTlTe5Q1SolqVHB8Q-6jsDkNI0X3g4t9xCc8B3JshX4giFd9hyljTQLSVk6IbKiHvyniBqGydhvKMfO6Xn0Do3nGcuE4s9YTW3N1OaDEbZV-a3FqqlH3Nmj2O6SWqjEpC15iXbQyJ2dlP8XnESoXsKqttO8_chG9uu5bW28Nd2oK1tBz1nqqjY2sSbjfOqD3b2eTmG0kXWZxy51Tq27fLLTHC5sZExzdzxCw1Q6mREKXMt0r8oFHebnSBIqWmyOaKv9Sp6ghsBBZ5HL8dHqrHb34MaoPhGOJOfE47j33R_MxxFeyx0h2V3Nw2iqzEinwGjZzwt8fIK4VDlffyFtJkMHmn-1MMjDFEN8T16pa6St2Y5vC2NBXp0TLwArDKjXVvMIRWaZZaxV9gm4prtj2EvMSQqW7HZta6QmSCkO4YOglPlMpQqGD3fjWNunDEK5RqiniMUAqa_e5f2hl1u3B7h_T4jhXTZYcD62G5hZRvcRaKJsifOQBEYSHqd0_wQ68KIj9RDGHjbL9YdOXwQ-IfqCrEKAbkl683u6P46eO2PaFBrucgztRyXtqmx36fWtXdS9tw82H34pZUq5H7MjG4Hy0oUnWklng_7U61fzL2ri4kOf_eAxM5H36GwTz5mjwWQ2id6mKkKcRPK8EKdO82aeA2Gt66W5iYo8cLwa8tZ8dskBUgVlw03l3f_rUz98tgroHmK2X81KLcY4uGxG5s-rYGs6b64E53anatBdXU2UNvBhysPNrWepgptEuInWGjPSeuDQlmTXefFGgMTjwS0D4PuZvyZqVlgHqwbF7lOflyELSAzmAjstpPwAqlU24WNaYoeKUFKTImF-57XVrVqsIkFaX3VyrfmY.EpHMzE-ig77cneKeJff2BQ',
            expires_in: 3600,
            token_type: 'Bearer',
        };
    }

    /*
     * For local development, return a hard coded response in line with our test JSON files
     */
    public async sendRefreshTokenGrant(refreshToken: string, request: LambdaEdgeRequest, response: LambdaEdgeResponse): Promise<any>  {

        return {
            id_token: 'eyJraWQiOiJKYkRZVVd0MVIwbUd1M0tYckJrUjNzcEpPXC9TWEprZlwvZW0weVRSZUxlZG89IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiSGdUQTlTTjBuSTF3aVBNYlQwTkYtUSIsInN1YiI6IjkzNGIxODcxLTFhODEtNGI1Zi1hMTYyLTRiMjMxZjVkYzJkMCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl9tWjNOQllwVG8iLCJjb2duaXRvOnVzZXJuYW1lIjoiOTM0YjE4NzEtMWE4MS00YjVmLWExNjItNGIyMzFmNWRjMmQwIiwiZ2l2ZW5fbmFtZSI6Ikd1ZXN0IiwiYXVkIjoiMTd0ZG1ycHJoY2M3ZmsyZHJjN240Ym12N2YiLCJldmVudF9pZCI6ImVlOTYxZmY2LTMyMGEtNDA0Mi1hMjY3LTQ1NzBjNzI2OGJkNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTk1MTkxOTA4LCJleHAiOjE1OTUxOTU1MDgsImlhdCI6MTU5NTE5MTkwOCwiZmFtaWx5X25hbWUiOiJVc2VyIiwiZW1haWwiOiJndWVzdHVzZXJAYXV0aGd1aWRhbmNlLmNvbSJ9.H4zLNenXKeqhZfT8pbmOQ7D-TI9Uh8FoMICb-v4FU59PdBgpmDmYCP_ehuy3HyFQuypbr5KGftFBsffLL9m-Oha65GWl2qcnn4KxI20Ir0HjpFZehkq9ti-0nVTc6zlMvN-_I0RetqLpmtwDNt3tIIzmRt0D8b7_wCwOb1OCsP-hUf6saW0lew7ksjEeKepVkHpnL0yXenhzWeD3FXQaJX3ThGLrOf-elmaBn1NXEhnYuFIDob1HDaxN1IwQlgFHqM50XmjmcKJhmQt4VcXMTDRaNplXwQNfmi-Mfk5ul3vrcFfDCn-Wo1illTIW18Fh8ywVuwiT6vJr_aGjflbWyA',
            access_token: 'eyJraWQiOiJvNWh6MGNBeUQ5WVI4emZpbTNEdXNVTzhFeFg4UUtXV2dpbjdFaUxVTk5vPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5MzRiMTg3MS0xYTgxLTRiNWYtYTE2Mi00YjIzMWY1ZGMyZDAiLCJldmVudF9pZCI6ImVlOTYxZmY2LTMyMGEtNDA0Mi1hMjY3LTQ1NzBjNzI2OGJkNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhdXRoX3RpbWUiOjE1OTUxOTE5MDgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTIuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0yX21aM05CWXBUbyIsImV4cCI6MTU5NTE5NTUwOCwiaWF0IjoxNTk1MTkxOTA4LCJ2ZXJzaW9uIjoyLCJqdGkiOiI4MjRiYTgxYS03Y2EyLTQ4NWEtODg3Yi04ZmFmNDRhZTg0MTMiLCJjbGllbnRfaWQiOiIxN3RkbXJwcmhjYzdmazJkcmM3bjRibXY3ZiIsInVzZXJuYW1lIjoiOTM0YjE4NzEtMWE4MS00YjVmLWExNjItNGIyMzFmNWRjMmQwIn0.Gq3zWxhed6UzP0BT7An9iz5DDDaZmDtDGjaxoBmFwUSN05Mp2A-F-P-fPyNsj0aKeA8reqHKYU1Mh4uuu6sPHfDbRBkb6z1A7NC_XBVEAlxwyd_IIvxqpstIXb83Dk0mZmBXBcElyzLNrXLHPK-fqv635i0vkMXlcqpohh0hw-3xrlC3I4kgqaJfpUm-CY23VciX_wrcjxYlBALzVuSHLfx47Mi4qtQU8apUEBjDvRt5St7t1vDEqoXlaUgLnTCow3iaclzJv4LCd1boual4DjWAqubvGrvUBxLJiBsv7k1L1bU4noLej8fhpFBHXFwBQ4Hv_Bl-iXaIs45np8ft2A',
            expires_in: 3600,
            token_type: 'Bearer',
        };
    }

    /*
     * Generate a value that matches encrypted data in our test config files
     */
    public generateCsrfField(): string {
        return 'pu027sP+852dOASJSJHYkKo5QPYUyw+F6mwm6lyRIJ0=';
    }
}