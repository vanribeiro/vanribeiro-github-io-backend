import dotenv from 'dotenv';
import { AluraDashboardService } from '../../types/alura-dashboard';

dotenv.config();

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