import { http, HttpResponse, HttpHandler } from 'msw';
import articlesDevToSummary from '../dev-to/articles.summary.mock.json';
import articlesDevTo from '../dev-to/articles.mock.json';
import aluraDashboard from '../alura-dashboard/dashboard.mock.json'
import { ARTICLES_ENDPOINT, URL_BASE_DEV_TO } from '../../../services/dev-to/init-options';

const urlAlura: string = `https://www.alura.com.br/api/dashboard/${process.env.ALURA_TOKEN_API}`;

const handlers: Array<HttpHandler> = [
  http.get('https://example.com/api', () => {
    return HttpResponse.json(articlesDevToSummary, { status: 200 });
  }),
];

const aluraHandlers: Array<HttpHandler> = [
  http.get(urlAlura, () => {
    return HttpResponse.json(aluraDashboard, { status: 200 });
  }),
];

const devToHandlers: Array<HttpHandler> = [
  http.get(`${URL_BASE_DEV_TO}${ARTICLES_ENDPOINT.PUBLISHED}`, () => {
    return HttpResponse.json(articlesDevTo, { status: 200 });
  }),
];

export {
    handlers,
    aluraHandlers,
    devToHandlers
};