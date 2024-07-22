import dotenv from 'dotenv';
import { AluraDashboardService } from '../../types/alura-dashboard';

dotenv.config();

/**
 * Creates an object with AluraDashboardService instance.
 * @returns an object with AluraDashboardService instance.
 * Possibles Values:
 * - URL_BASE: url for the Alura Dashboard API
 * - TOKEN_API: authentication token for the Alura Dashboard API
 * - initOptions: request options for making API requests
 */
function aluraDashboardService(): AluraDashboardService {
    
    const token: string | undefined = process.env.ALURA_TOKEN_API;
    const url: string = "https://www.alura.com.br/api/dashboard/";
    const initOptions: RequestInit = { method: 'GET'};

    return {
        URL_BASE: url,
        TOKEN_API: token,
        initOptions
    }
}

export default aluraDashboardService;