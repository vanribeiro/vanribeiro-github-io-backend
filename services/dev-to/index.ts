import dotenv from 'dotenv';
import { DevToEndpoints, DevToService } from '../../types/dev-to-api';

dotenv.config();

/**
 * Returns an object with DevToService instance data.
 * @returns {DevToService} An object with DevToService instance data.
 * Possibles Values:
 * - URL_BASE: url for the Dev.to API
 * - endpoint: endpoints for articles
 * - initOptions: request options for making API requests
 * - tokenDevTo: authentication token for the Dev.to API
 */
function devToService(): DevToService {

    const endpoint: DevToEndpoints = {
        articles: {
            UNPUBLISHED: '/articles/me/unpublished',
            PUBLISHED: '/articles/me/published',
            ALL: '/articles/me/all',
        }
    }
    
    const tokenDevTo: string | undefined = process.env.DEV_TO_TOKEN_API;
    const url: string = 'https://dev.to/api';
     
    const initOptions: RequestInit = {
        method: 'GET',
        headers: {
            'api-key': tokenDevTo as string,
            'Content-type': 'application/vnd.forem.api-v1+json',
            'Accept': 'application/vnd.forem.api-v1+json',
        },
    }

    return {
        URL_BASE: url,
        endpoint,
        initOptions,
        tokenDevTo: tokenDevTo as string,
    }
}

export default devToService;