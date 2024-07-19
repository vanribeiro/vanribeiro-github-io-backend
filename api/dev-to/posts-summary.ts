import { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';

import { fetchData } from '../../services/fetch';
import { responseData } from '../../services/commons';
import { IArticle, IArticles } from '../../interfaces/dev-to-api/articles';
import { mapArticle } from '../../services/helpers/mappers';

dotenv.config();

export default async function handler(req: VercelRequest, res: VercelResponse) {
    
    const { pagina, por_pagina } = req.query;

    const page = parseInt(pagina as string, 5) || 1;
    const perPage = parseInt(por_pagina as string, 5) || 5;

    const url = `https://dev.to/api/articles/me?page=${page}&per_page=${perPage}`;
    const token = process.env.DEV_TO_TOKEN_API;

    const initOptions: RequestInit = {
        method: 'GET',
        headers: {
            'api-key': token as string,
            'Content-type': 'application/vnd.forem.api-v1+json',
            'Accept': 'application/vnd.forem.api-v1+json',
        },
    }

    const result = await fetchData({ url, initOptions }).then((articles: IArticles) => {

        if(articles.length === 0) {
            responseData.errors.push('Nenhum artigo encontrado');
            return [];
        }

        return articles.map((article: IArticle) => mapArticle(article));
    });


    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    responseData.data = result;
    res.statusCode = responseData.status;

    return res.json(responseData);
}
