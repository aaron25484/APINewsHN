import express from 'express';
import { getNews } from './controllers/newsController';
import dotenv from 'dotenv';

dotenv.config()
const app = express();

app.get('/', getNews)
app.get('/:number?', getNews);

export default app;
