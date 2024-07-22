import { VercelRequest, VercelResponse } from '@vercel/node';

import { fetchData } from '../../services/fetch';
import { responseData } from '../../services/commons';
import { IArticle } from '../../interfaces/dev-to-api/articles';
import { mapArticle } from '../../services/helpers/mappers';
import devToService from '../../services/dev-to';

/**
 * Handles the request to fetch published articles from the Dev.to API.
 * 
 * @param req - The request object containing the query parameters.
 * @param res - The response object used to send the API response.
 * @returns A Promise that resolves to the JSON response containing the fetched articles.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
    
    const { page, per_page } = req.query;
    const { URL_BASE, endpoint, initOptions } = devToService();

    const pg: number = parseInt(page as string, 5) || 1;
    const pPg: number = parseInt(per_page as string, 5) || 5;
    const queries: string = `?page=${pg}&per_page=${pPg}`;

    const url: string = `${URL_BASE}${endpoint.articles.PUBLISHED}${queries}`;

    const result = 
        await fetchData({ url, initOptions })
            .then((articles: Array<IArticle>) => {

                if(articles.length === 0) {
                    responseData.errors.push('Nenhum artigo encontrado');
                    return [];
                }

                return mapArticle(articles);
            });

    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    responseData.data = result;
    res.statusCode = responseData.status;

    return res.json(responseData);
}
