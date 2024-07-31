import { VercelRequest, VercelResponse } from "@vercel/node";

type VercelHandler = (req: VercelRequest, res: VercelResponse) => Promise<VercelResponse>;

function allowCors(handler: VercelHandler): VercelHandler {
    return async (req: VercelRequest, res: VercelResponse) => {
    
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        );
    
        return await handler(req, res);
    }
}

export default allowCors;