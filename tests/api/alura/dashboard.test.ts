import { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';
import aluraDashboard from '../../../api/alura/dashboard';
import { serverAlura } from '../../mocks/msw-server/node';
import { http, HttpResponse, JsonBodyType } from 'msw';
import { IResponseData } from '../../../interfaces/response';

import courseProgresses from '../../mocks/alura-dashboard/course-progresses.mock.json';
import guides from '../../mocks/alura-dashboard/guides.mock.json';
import dashboardEmpty from '../../mocks/alura-dashboard/dashboard-empty.mock.json';
import dashboardNoProgress from '../../mocks/alura-dashboard/dashboard-no-progress.mock.json';
import dashboardNoGuide from '../../mocks/alura-dashboard/dashboard-no-guides.mock.json';

dotenv.config();

beforeEach(() => {
    serverAlura.listen();
});

afterEach(() => {
    serverAlura.resetHandlers();
});

afterAll(() => {
    serverAlura.close();
});

const url: string =`https://www.alura.com.br/api/dashboard/${process.env.ALURA_TOKEN_API}`;

describe('/api/alura-dashboard', () => {

    it('should return a json', async () => {

        serverAlura.use(
            http.get(
                url,
                () => {
                    return HttpResponse.json(dashboardEmpty, { status: 200 });
                },
                { once: true }
            )
        );

        const req: VercelRequest = {
            method: 'GET',
            query: {
                collection: jest.fn().mockReturnValue(this),
            },
        } as unknown as VercelRequest;

        const res: VercelResponse = {
            statusCode: jest.fn().mockReturnValue(this),
            json: jest.fn(),
            header: jest.fn().mockReturnValue(this),
        } as unknown as VercelResponse;

        res.setHeader = jest.fn().mockImplementation((key, value) => ({key: key, value: value}));

        await aluraDashboard(req, res);

        expect(res.statusCode).toEqual(200);
        expect(res.json).toHaveBeenCalled();
    });

    it('should return an error message when no course progress was found', async () => {
        serverAlura.use(
            http.get(
                url,
                () => {
                    return HttpResponse.json(dashboardNoProgress, { status: 200 });
                },
                { once: true }
            )
        );

        const expectedData : IResponseData = {
            status: 200,
            data: dashboardNoProgress,
            errors: ['Nenhum curso em progresso'],
        }

        const req: VercelRequest = {
            method: 'GET',
            query: {
                collection: jest.fn().mockReturnValue(this),
            },
        } as unknown as VercelRequest;

        const res: VercelResponse = {
            statusCode: jest.fn().mockReturnValue(this),
            json: jest.fn().mockReturnValue(expectedData),
            header: jest.fn().mockReturnValue(this),
        } as unknown as VercelResponse;

        res.setHeader = jest.fn().mockImplementation((key, value) => ({key: key, value: value}));

        const result: JsonBodyType = await aluraDashboard(req, res);

        expect(res.statusCode).toEqual(200);
        expect(result.errors[0]).toBe('Nenhum curso em progresso');

    });

    it('should return an error message when no guide was found', async () => {

        serverAlura.use(
            http.get(
                url,
                () => {
                    return HttpResponse.json(dashboardNoGuide, { status: 200 });
                },
                { once: true }
            )
        );

        const expectedData : IResponseData = {
            status: 200,
            data: dashboardNoGuide,
            errors: ['Nenhum guia encontrado'],
        }

        const req: VercelRequest = {
            method: 'GET',
            query: {
                collection: jest.fn().mockReturnValue(this),
            },
        } as unknown as VercelRequest;

        const res: VercelResponse = {
            statusCode: jest.fn().mockReturnValue(this),
            json: jest.fn().mockReturnValue(expectedData),
            header: jest.fn().mockReturnValue(this),
        } as unknown as VercelResponse;

        res.setHeader = jest.fn().mockImplementation((key, value) => ({key: key, value: value}));

        const result: JsonBodyType = await aluraDashboard(req, res);

        expect(res.statusCode).toEqual(200);
        expect(result.errors[0]).toBe('Nenhum guia encontrado');

    });

    it('should return an error message when no course progress ou guide were found', async () => {

        serverAlura.use(
            http.get(
                url,
                () => {
                    return HttpResponse.json(dashboardEmpty, { status: 200 });
                },
                { once: true }
            )
        );

        const expectedData : IResponseData = {
            status: 200,
            data: dashboardEmpty,
            errors: ['Nenhum curso ou guia encontrado'],
        }

        const req: VercelRequest = {
            method: 'GET',
            query: {
                collection: jest.fn().mockReturnValue(this),
            },
        } as unknown as VercelRequest;

        const res: VercelResponse = {
            statusCode: jest.fn().mockReturnValue(this),
            json: jest.fn().mockReturnValue(expectedData),
            header: jest.fn().mockReturnValue(this),
        } as unknown as VercelResponse;

        res.setHeader = jest.fn().mockImplementation((key, value) => ({key: key, value: value}));

        const result: JsonBodyType = await aluraDashboard(req, res);

        expect(res.statusCode).toEqual(200);
        expect(result.errors[0]).toBe('Nenhum curso ou guia encontrado');

    });

});

describe('/api/alura-dashboard queries', () => {

    it('should return the course progress list when the collection parameter is "progresso"', async () => {

        const expectedData : IResponseData = {
            status: 200,
            data: courseProgresses,
            errors: [],
        }

        const req: VercelRequest = {
            method: 'GET',
            query: {
                collection: 'progresso',
            },
        } as unknown as VercelRequest;

        const res: VercelResponse = {
            statusCode: jest.fn().mockReturnValue(this),
            json: jest.fn().mockReturnValue(expectedData),
            header: jest.fn().mockReturnValue(this),
        } as unknown as VercelResponse;

        res.setHeader = jest.fn().mockImplementation((key, value) => ({key: key, value: value}));

        const result = await aluraDashboard(req, res);

        expect(res.statusCode).toEqual(200);
        expect(result).toStrictEqual(expectedData);

    });

    it('should return the course progress list when the collection parameter is "guias"', async () => {

        const expectedData : IResponseData = {
            status: 200,
            data: guides,
            errors: [],
        }

        const req: VercelRequest = {
            method: 'GET',
            query: {
                collection: 'guias',
            },
        } as unknown as VercelRequest;

        const res: VercelResponse = {
            statusCode: jest.fn().mockReturnValue(this),
            json: jest.fn().mockReturnValue(expectedData),
            header: jest.fn().mockReturnValue(this),
        } as unknown as VercelResponse;

        res.setHeader = jest.fn().mockImplementation((key, value) => ({key: key, value: value}));

        const result = await aluraDashboard(req, res);

        expect(res.statusCode).toEqual(200);
        expect(result).toStrictEqual(expectedData);

    });
    
});