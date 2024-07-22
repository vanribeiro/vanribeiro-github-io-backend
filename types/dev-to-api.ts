/**
 * Represents the type of publishing for a Dev.to API resource.
 * @typedef {string} TypeOfPublishing - The type of publishing for a Dev.to API resource.
 * Possible values are "articles", "profile_image", "podcast_episodes", "organization", "
 */
type TypeOfPublishing = 
                        "articles" | 
                        "profile_image" | 
                        "podcast_episodes" | 
                        "organization" | 
                        "user_follower" | 
                        "comment";

/**
 * Represents the endpoints for the Dev.to API.
 * @typedef {Object} DevToEndpoints - The endpoints for the Dev.to API.
 * @property {Object} articles - The endpoints for articles.
 * @property {string} PUBLISHED - The endpoint for published articles.
 * @property {string} UNPUBLISHED - The endpoint for unpublished articles.
 * @property {string} ALL - The endpoint for all articles.
 */
type DevToEndpoints = {
    articles: {
        PUBLISHED: string;
        UNPUBLISHED: string;
        ALL: string;
    }
}

/**
 * Represents a Dev.to service configuration.
 * @typedef {Object} DevToService - The configuration for the Dev.to service.
 * @property {string} URL_BASE - The base URL for the Dev.to API.
 * @property {DevToEndpoints} endpoint - The endpoints for the Dev.to API.
 * @property {RequestInit} initOptions - The request options for making API requests.
 * @property {string | undefined} tokenDevTo - The authentication token for the Dev.to API
 */
type DevToService = {
    URL_BASE: string;
    endpoint: DevToEndpoints;
    initOptions: RequestInit;
    tokenDevTo: string | undefined;
}

export {
    TypeOfPublishing,
    DevToService,
    DevToEndpoints
}