import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

router.get('/', (__, res) => {
    
    const token = process.env.INSTRAGRAM_TOKEN_API;
    const media = 'id,caption,media_type,permalink,thumbnail_url,username,media_url';
    const URI = `https://graph.instagram.com/me/media?fields=${media}&access_token=${token}`;
    
    fetch(URI)
    .then(response => response.json())
    .then(data => res.send(data));

    res.status(200);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});


export {
    router
};