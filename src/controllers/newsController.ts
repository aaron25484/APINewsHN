import { Request, Response } from 'express';
import { fetchNews } from '../services/newsService';

export const getNews = async (req: Request, res: Response) => {
  const number = parseInt(req.params.number || '1', 10);
  if (isNaN(number) || number < 1) {
    return res.status(400).json({ error: 'Invalid number parameter' });
  }

  try {
    const news = await fetchNews(number);
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};
