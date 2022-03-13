import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

router.get('/', (req, res) => {

    const token = process.env.ALURA_TOKEN_API;
    fetch(`https://www.alura.com.br/api/dashboard/${token}`)
    .then(response => response.json())
    .then(data => res.send(data.courseProgresses));

    res.status(200);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
});

export {
    router
};