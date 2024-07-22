/**
 * Represents the data required for making an HTTP request.
 */
interface IRequestData {
    /**
     * The URL of the request.
     */
    url: string;

    /**
     * The HTTP method of the request. Defaults to 'GET'.
     */
    method?: 'GET';

    /**
     * The token to be included in the request headers.
     */
    token?: string;

    /**
     * Additional options to be passed to the `fetch` function.
     */
    initOptions?: RequestInit;
};

/**
 * Represents a mapping of status codes to their corresponding messages.
 */
interface IStatusCodeMessage{
    [code: number]: string;
}

export {
    IRequestData,
    IStatusCodeMessage
}