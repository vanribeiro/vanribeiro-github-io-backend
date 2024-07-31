import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Represents a handler function for Vercel serverless functions.
 * It takes in a request object of type `VercelRequest` and a response object of type `VercelResponse`,
 * and returns a promise that resolves to a `VercelResponse`.
 */
type VercelHandler = (req: VercelRequest, res: VercelResponse) => Promise<VercelResponse>;

/**
 * Middleware function to allow Cross-Origin Resource Sharing (CORS) for a Vercel handler.
 * @param handler - The Vercel handler function.
 * @returns A new Vercel handler function with CORS headers set.
 */
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