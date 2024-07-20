import { VercelRequest, VercelResponse } from '@vercel/node';
import { http, HttpResponse, JsonBodyType } from 'msw';

import posts from '../../../api/dev-to/posts'
import { serverDevTo } from '../../mocks/msw-server/node';
import { IResponseData } from '../../../interfaces/response';
import { reponseInit } from './utils';
import { ARTICLES_ENDPOINT, URL_BASE_DEV_TO } from '../../../services/dev-to/init-options';

beforeEach(() => {
    serverDevTo.listen();
});

afterEach(() => {
    serverDevTo.resetHandlers();
});

afterAll(() => {
    serverDevTo.close();
});

describe('/api/dev-to/posts', () => {

    it('should return a json', async () => {

        const req: VercelRequest = {
            method: 'GET',
            query: {
                pagina: jest.fn().mockReturnValue(this),
                por_pagina: jest.fn().mockReturnValue(this),
            },
        } as unknown as VercelRequest;

        const res: VercelResponse = {
            statusCode: jest.fn().mockReturnValue(this),
            json: jest.fn().mockReturnValue(this),
            header: jest.fn().mockReturnValue(this),
        } as unknown as VercelResponse;

        res.setHeader = jest.fn().mockImplementation((key, value) => ({key: key, value: value}));

        await posts(req, res);

        expect(res.statusCode).toEqual(200);
        expect(res.json).toHaveBeenCalled();
    });

    it('should return an error message when no article is available', async () => {

        serverDevTo.use(
            http.get(
                `${URL_BASE_DEV_TO}${ARTICLES_ENDPOINT.PUBLISHED}`,
                () => {
                    return HttpResponse.json([], reponseInit);
                },
                { once: true }
            )
        );

        const expectedData : IResponseData = {
            status: 200,
            data: [],
            errors: ['Nenhum artigo encontrado'],
        }

        const req: VercelRequest = {
            method: 'GET',
            query: {
                pagina: jest.fn().mockReturnValue(this),
                por_pagina: jest.fn().mockReturnValue(this),
            },
        } as unknown as VercelRequest;

        const res: VercelResponse = {
            statusCode: jest.fn().mockReturnValue(this),
            json: jest.fn().mockReturnValue(expectedData),
            header: jest.fn().mockReturnValue(this),
        } as unknown as VercelResponse;

        res.setHeader = jest.fn().mockImplementation((key, value) => ({key: key, value: value}));

        const result: JsonBodyType = await posts(req, res);

        expect(res.statusCode).toEqual(200);
        expect(result.errors[0]).toBe('Nenhum artigo encontrado');
    });

});