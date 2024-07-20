import { HttpResponseInit } from "msw";
import { tokenDevTo } from "../../../services/dev-to/init-options";

const reponseInit: HttpResponseInit  = {
    status: 200,
    headers: {
        'api-key': tokenDevTo as string,
        'Content-type': 'application/vnd.forem.api-v1+json',
        'Accept': 'application/vnd.forem.api-v1+json',
    },
}

export { reponseInit };