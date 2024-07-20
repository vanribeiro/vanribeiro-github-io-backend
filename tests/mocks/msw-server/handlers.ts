import { http, HttpResponse, HttpHandler } from 'msw';
import articlesSummary from '../dev-to/articles.summary.mock.json';
import aluraDashboard from '../alura-dashboard/dashboard.mock.json'

const urlAlura: string =`https://www.alura.com.br/api/dashboard/${process.env.ALURA_TOKEN_API}`;

const handlers: Array<HttpHandler> = [
  http.get('https://example.com/api', () => {
    return HttpResponse.json(articlesSummary);
  }),
];

const aluraHandlers: Array<HttpHandler> = [
  http.get(urlAlura, () => {
    return HttpResponse.json(aluraDashboard, { status: 200 });
  }),
];

export {
    handlers,
    aluraHandlers,
};