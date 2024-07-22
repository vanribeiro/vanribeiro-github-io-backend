import { IRequestData } from "../interfaces/request";
import { ErrorMessage } from "../types/errors";
import { mapStatusCode } from "./helpers/mappers";

/**
 * Fetches data from the specified URL using the Fetch API.
 * 
 * @param {IRequestData} requestData - The request data object containing the URL, token, and init options.
 * @returns {Promise<any>} - A promise that resolves to the fetched data.
 */
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