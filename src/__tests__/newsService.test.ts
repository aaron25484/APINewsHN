import { fetchNews, parseNews } from '../services/newsService';

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
  const news = await fetchNews(4); 
  expect(news.length).toBe(120);
  expect(news.some(newsItem => newsItem.published.includes('1 hour ago'))).toBeTruthy();

});