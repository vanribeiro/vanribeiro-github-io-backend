import type { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';

import { fetchData } from '../services/fetch';
import { IAluraDashboard, ICourseProgresses, IGuide } from '../interfaces/alura-dashboard';
import { responseData } from '../services/commons';

dotenv.config();

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { collection } = req.query;

    const token: string | undefined = process.env.ALURA_TOKEN_API;
    const url: string = "https://www.alura.com.br/api/dashboard/";

    const result: IAluraDashboard | Array<ICourseProgresses> | Array<IGuide> = 
        await fetchData({url, token, initOptions: { method: 'GET' }  })
                .then((data: IAluraDashboard)  => {
                    if (!data.courseProgresses) {
                        responseData.errors.push('Nenhum curso em progresso');
                    }

                    if (collection === 'em-progresso') {
                        return data.courseProgresses;
                    }

                    if (collection === 'guias') {
                        return data.guides;
                    }

                    return {
                        courseProgresses: data.courseProgresses, 
                        guides: data.guides  
                    };
                });

    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    responseData.data = result;
    res.statusCode = responseData.status;

    return res.json(responseData);
}
