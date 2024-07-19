import { http, HttpResponse, HttpHandler } from 'msw';
import articlesSummary from '../articles-summary';

const handlers: Array<HttpHandler> = [
  http.get('https://example.com/api', () => {
    return HttpResponse.json(articlesSummary);
  }),
];

export {
    handlers
};