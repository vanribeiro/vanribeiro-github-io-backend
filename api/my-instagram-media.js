import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

router.get('/', (req, res) => {
    
    const token = process.env.INSTRAGRAM_TOKEN_API;
    const media = 'id,caption,media_type,permalink,thumbnail_url,username,media_url';
    fetch(`https://graph.instagram.com/me/media?fields=${media}&access_token=${token}`)
    .then(response => response.json())
    .then(data => res.send(data));
    
});


export {
    router
};