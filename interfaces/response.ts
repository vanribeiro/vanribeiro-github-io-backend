import { ErrorMessage } from "../types/errors";

interface IResponseData {
    status: number,
    data: any,
    errors: Array<string | ErrorMessage>,
};

interface IResponseFetch{
    result: any,
    errors: ErrorMessage,
}

export {
    IResponseData,
    IResponseFetch
}