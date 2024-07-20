import dotenv from 'dotenv';
import { ArticlesEndpoint } from '../../types/dev-to-api';

dotenv.config();

const ARTICLES_ENDPOINT: ArticlesEndpoint = {
    PUBLISHED: '/articles/me/published'
}

const tokenDevTo: string | undefined = process.env.DEV_TO_TOKEN_API;
const URL_BASE_DEV_TO: string = 'https://dev.to/api';
 
const initOptions: RequestInit = {
    method: 'GET',
    headers: {
        'api-key': tokenDevTo as string,
        'Content-type': 'application/vnd.forem.api-v1+json',
        'Accept': 'application/vnd.forem.api-v1+json',
    },
}

export {
    URL_BASE_DEV_TO,
    ARTICLES_ENDPOINT,
    initOptions,
    tokenDevTo,
}