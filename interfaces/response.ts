import { ErrorMessage } from "../types/errors";

/**
 * Represents the response data returned by an API.
 * @interface IResponseData
 */
interface IResponseData {
    status: number,
    data: any,
    errors: Array<string | ErrorMessage>,
};

/**
 * Represents the response object returned from a fetch operation.
 * @interface IResponseData
 */
interface IResponseFetch{
    result: any,
    errors: ErrorMessage,
}

export {
    IResponseData,
    IResponseFetch
}