import { IRequestData } from "../interfaces/request";
import { IResponseFetch } from "../interfaces/response";
import { ErrorMessage } from "../types/errors";
import { mapStatusCode } from "./helpers/mappers";

async function fetchData ({
    url,
    token,
    initOptions 
}: IRequestData): Promise<any> {
    const source = token ? `${url}${token}` : url;
    const response = await fetch(source, initOptions ? initOptions : {});
    
    const errors: ErrorMessage = {
        statusCode: response.status,
        message: mapStatusCode(response.status, response.statusText)
    };

    if (!response.ok) return errors;

    const result = await response.json();
    
    return result;
}

export { fetchData };