/**
 * Represents an error message.
 * @typedef {Object} ErrorMessage
 * @property {number} [statusCode] - The status code of the error.
 * @property {string | null} [message] - The error message.
 */
type ErrorMessage = {
    statusCode?: number,
    message?: string | null,
}

export {
    ErrorMessage
}