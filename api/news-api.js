import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const router = express.Router();

dotenv.config();

router.get('/', (req, res) => {

    const { q, from, to, sortBy, language, pageSize, page, sources, domains, excludeDomains } = req;
    const q1 = `q=${q}&from=${from}&to=${to}&sortBy=${sortBy}`;
    const q2 = `&language=${language}&pageSize=${pageSize}&page=${page}&sources=${sources}`;
    const q3 = `&domains=${domains}&excludeDomains=${excludeDomains}`;

    const token = process.env.NEWS_API_TOKEN;
    fetch(`https://newsapi.org/v2/everything?${q1}${q2}${q3}&apiKey=${token}`)
    .then(response => response.json())
    .then(data => res.send(data));

    res.status(200);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
});

export {
    router
};