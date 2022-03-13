import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const myInstagramHandler = (res, req) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const token = process.env.INSTRAGRAM_TOKEN_API;
    const media = 'id,caption,media_type,permalink,thumbnail_url,username,media_url';
    fetch(`https://graph.instagram.com/me/media?fields=${media}&access_token=${token}`)
    .then(response => response.json())
    .then(data => res.send(data));
}

export default myInstagramHandler();