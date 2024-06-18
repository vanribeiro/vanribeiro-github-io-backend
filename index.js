import express from 'express';
import dotenv from 'dotenv';

import { router as myInstagram } from './api/my-instagram-media.js';
import { router as studyingAtAlura } from './api/coursing-in-alura.js';
import { router as newsApi } from './api/news-api.js';

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use('/api/meu-instagram', myInstagram);

app.use('/api/estudando-na-alura', studyingAtAlura);

app.use('/api/news-api', newsApi)

app.listen(port, () => console.log(`Running at http://localhost:${port}/`));
