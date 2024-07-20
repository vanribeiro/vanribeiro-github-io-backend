import type { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';

import { fetchData } from '../../services/fetch';
import { IAluraDashboard, ICourseProgress, IGuide } from '../../interfaces/alura-api/dashboard';
import { responseData } from '../../services/commons';
import { mapCourseProgress, mapGuides } from '../../services/helpers/mappers';

dotenv.config();

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { collection } = req.query;

    const token: string | undefined = process.env.ALURA_TOKEN_API;
    const url: string = "https://www.alura.com.br/api/dashboard/";

    const result: IAluraDashboard | Array<ICourseProgress> | Array<IGuide> =
        await fetchData({ url, token, initOptions: { method: 'GET' } })
            .then((data: IAluraDashboard) => {

                if (data.courseProgresses.length === 0) {
                    responseData.errors.push('Nenhum curso em progresso');
                }

                if (data.guides.length === 0) {
                    responseData.errors.push('Nenhum guia encontrado');
                }

                if (data.courseProgresses.length === 0 && data.guides.length === 0) {
                    responseData.errors.push('Nenhum curso ou guia encontrado');
                }

                const courseProgressList: Array<ICourseProgress> = mapCourseProgress(data.courseProgresses);                  
                const guideList: Array<IGuide> = mapGuides(data.guides);

                if (collection === 'progresso') {
                    return courseProgressList;
                }

                if (collection === 'guias') {
                    return guideList;
                }

                return {
                    courseProgresses: courseProgressList,
                    guides: guideList
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
