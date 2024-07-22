import { setupServer } from 'msw/node';
import { handlers, aluraHandlers, devToHandlers } from './handlers';
 
export const server = setupServer(...handlers);
export const serverAlura = setupServer(...aluraHandlers);
export const serverDevTo = setupServer(...devToHandlers);