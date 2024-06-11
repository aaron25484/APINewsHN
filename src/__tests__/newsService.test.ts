import { fetchNews } from '../services/newsService';

test('fetchNews returns correct number of items', async () => {
  const news = await fetchNews(1);
  expect(news.length).toBe(30); 
});

test('fetchNews handles multiple pages', async () => {
  const news = await fetchNews(3);
  expect(news.length).toBe(90);
});

test('fetchNews uses cache for previously fetched pages', async () => {
  await fetchNews(1); 
  const news = await fetchNews(2); 
  expect(news.length).toBe(60); 
});