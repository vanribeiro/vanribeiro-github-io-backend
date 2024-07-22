/**
 * Represents the kind of item in the Alura dashboard.
 * @typedef {string} Kind - The kind of item in the Alura dashboard.
 * Possible values are 'CAREER', 'DEGREE', 'STUDY_PLAN', 'COMPANY_GUIDE', and 'USER_GUIDE'.
 */
type Kind = 'CAREER' | 'DEGREE' | 'STUDY_PLAN' | 'COMPANY_GUIDE' | 'USER_GUIDE';

/**
 * Represents the configuration options for the Alura Dashboard service.
 * @typedef {Object} AluraDashboardService - The configuration options for the Alura Dashboard service.
 * @property {string} URL_BASE - The base URL for the Alura Dashboard API.
 * @property {string | undefined} TOKEN_API - The authentication token for the Alura Dashboard API
 * @property {RequestInit} initOptions - The request options for making API requests.
 */
type AluraDashboardService = {
    URL_BASE: string;
    TOKEN_API: string | undefined;
    initOptions: RequestInit;
}

export {
    Kind,
    AluraDashboardService,
}