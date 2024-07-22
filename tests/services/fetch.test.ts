import { server } from "../mocks/msw-server/node";
import { fetchData } from "./../../services/fetch";
import { IResponseData } from "../../interfaces/response";
import articlesSummary from "../mocks/dev-to/articles.summary.mock.json";
import { http, HttpResponse, HttpResponseInit } from "msw";

beforeEach(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});

const url = 'https://example.com/api';

describe("fetchData function", () => {

    it("should return valid data", async () => {
        const result = await fetchData({ url }).then((data) => data);

        const data: IResponseData = {
            status: 200,
            data: articlesSummary,
            errors: [],
        };

        expect(result[0].title).toEqual(data.data[0].title);   
    });

    it("fetchData should return 200 when initOption with token is set", async () => {

        const reponseInit: HttpResponseInit  = {
            status: 200,
            headers: {
                'api-key': 'test-token-123456',
                'Content-type': 'application/vnd.forem.api-v1+json',
                'Accept': 'application/vnd.forem.api-v1+json',
            },
        }

        server.use(
            http.get(
                `${url}`,
                () => {
                    return HttpResponse.json([{ data: { status: 'token_is_working' } }], reponseInit);
                },
                { once: true }
            )
        );

        const initOptions: ResponseInit  = {
            headers: {
                'api-key': 'test-token-123456',
                'Content-type': 'application/vnd.forem.api-v1+json',
                'Accept': 'application/vnd.forem.api-v1+json',
            },
        }

        const result = await fetchData({ url, initOptions }).then((data) => data);
        
        expect(result[0].data.status).toBe('token_is_working');
    });

    it("fetchData should return 401 when token is not set", async () => {

        const reponseInit: HttpResponseInit  = {
            status: 401,
            headers: {
                'api-key': 'test-token-123456',
                'Content-type': 'application/vnd.forem.api-v1+json',
                'Accept': 'application/vnd.forem.api-v1+json',
            },
        }

        server.use(
            http.get(
                `${url}`,
                () => {
                    return HttpResponse.json([{
                        data: {
                            status: 'token_is_not_working',
                        }
                    }], reponseInit);
                },
                { once: true }
            )
        );

        const initOptions: ResponseInit  = {
            headers: {
                'api-key': '',
                'Content-type': 'application/vnd.forem.api-v1+json',
                'Accept': 'application/vnd.forem.api-v1+json',
            },
        }

        const result = await fetchData({ url, initOptions }).then((data) => data);

        expect(result.statusCode).toBe(401);
        expect(result.message).toBe('Não Autorizado');
    });

});
