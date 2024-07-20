import { setupServer } from 'msw/node';
import { handlers, aluraHandlers } from './handlers';
 
export const server = setupServer(...handlers);
export const serverAlura = setupServer(...aluraHandlers);