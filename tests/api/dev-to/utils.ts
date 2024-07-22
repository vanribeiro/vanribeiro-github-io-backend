import { HttpResponseInit } from "msw";
import devToService from "../../../services/dev-to";

const { tokenDevTo } = devToService();

const reponseInit: HttpResponseInit  = {
    status: 200,
    headers: {
        'api-key': tokenDevTo as string,
        'Content-type': 'application/vnd.forem.api-v1+json',
        'Accept': 'application/vnd.forem.api-v1+json',
    },
}

export { reponseInit };