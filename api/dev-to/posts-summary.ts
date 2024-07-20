import { VercelRequest, VercelResponse } from '@vercel/node';

import { fetchData } from '../../services/fetch';
import { responseData } from '../../services/commons';
import { IArticle } from '../../interfaces/dev-to-api/articles';
import { mapArticleSummary } from '../../services/helpers/mappers';
import { ARTICLES_ENDPOINT, initOptions, URL_BASE_DEV_TO } from '../../services/dev-to/init-options';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    
    const { page, per_page } = req.query;

    const pg: number = parseInt(page as string, 5) || 1;
    const pPg: number = parseInt(per_page as string, 5) || 5;
    const queries: string = `?page=${pg}&per_page=${pPg}`;

    const url: string = `${URL_BASE_DEV_TO}${ARTICLES_ENDPOINT.PUBLISHED}${queries}`;

    const result: Array<IArticle> = await fetchData({ url, initOptions }).then((articles: Array<IArticle>) => {

        if(articles.length === 0) {
            responseData.errors.push('Nenhum artigo encontrado');
            return [];
        }
        
        return mapArticleSummary(articles);
    });

    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    responseData.data = result;
    res.statusCode = responseData.status;

    return res.json(responseData);
}
