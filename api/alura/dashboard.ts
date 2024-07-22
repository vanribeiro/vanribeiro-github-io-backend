import type { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';

import { fetchData } from '../../services/fetch';
import { IAluraDashboard, ICourseProgress, IGuide } from '../../interfaces/alura-api/dashboard';
import { responseData } from '../../services/commons';
import { mapCourseProgress, mapGuides } from '../../services/helpers/mappers';
import aluraDashboardService from '../../services/alura';

dotenv.config();

/**
 * Handles the HTTP request and response for the dashboard endpoint.
 * 
 * @param req - The VercelRequest object representing the incoming HTTP request.
 * @param res - The VercelResponse object representing the outgoing HTTP response.
 * @returns A Promise that resolves to the JSON response.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {

    const { collection } = req.query;
    const { URL_BASE, TOKEN_API, initOptions } = aluraDashboardService();

    const result: IAluraDashboard | Array<ICourseProgress> | Array<IGuide> =
        await fetchData({ url: `${URL_BASE}${TOKEN_API}`, initOptions })
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
