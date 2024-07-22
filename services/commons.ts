import { IResponseData } from "../interfaces/response";

/**
 * Represents the response data object.
 * @typedef IResponseData
 * @property {number} status - The HTTP status code.
 * @property {any} data - The fetched data.
 * @property {ErrorMessage[]} errors - Any errors encountered during the request.
 */
const responseData: IResponseData = {
    status: 200,
    data: null,
    errors: []
};

export {
    responseData,
}