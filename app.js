import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const app = express();
const port = 3000;

dotenv.config();

app.get('/instagram-api', (req, res) => {
    
    const token = process.env.INSTRAGRAM_TOKEN_API;
    const media = 'id,caption,media_type,permalink,thumbnail_url,username,media_url';
    fetch(`https://graph.instagram.com/me/media?fields=${media}&access_token=${token}`)
    .then(response => response.json())
    .then(data => res.send(data));
    
});

app.get('/alura-api', (req, res) => {

    const token = process.env.ALURA_TOKEN_API;
    fetch(`https://www.alura.com.br/api/dashboard/${token}`)
    .then(response => response.json())
    .then(data => res.send(data));
    
});

app.listen(port);
