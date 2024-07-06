import { fetchNews, cache } from '../services/newsService';

test('fetchNews returns correct number of items', async () => {
  const news = await fetchNews(1);
  expect(news.length).toBe(30); 
});

test('fetchNews handles multiple pages', async () => {
  const news = await fetchNews(3);
  expect(news.length).toBe(90);
});

test('fetchNews uses cache for previously fetched pages', async () => {

  const firstFetch = await fetchNews(1);
  console.log(`First fetch (page 1): ${firstFetch.length} news items`);

  expect(firstFetch.length).toBe(30);

  const secondFetch = await fetchNews(4);
  console.log(`Second fetch (pages 1 to 4): ${secondFetch.length} news items`);

  expect(secondFetch.length).toBe(120);

  const isCacheUsedFirst = firstFetch.every(newsItem =>
    secondFetch.some(item => item === newsItem)
  );
  console.log(`Cache used for page 1: ${isCacheUsedFirst}`);
  expect(isCacheUsedFirst).toBe(true);

  const thirdFetch = await fetchNews(3);
  console.log(`Third fetch (pages 1 to 3): ${thirdFetch.length} news items`);

  expect(thirdFetch.length).toBe(90);

  const isCacheUsed = [...firstFetch, ...secondFetch.slice(30, 90)].every(newsItem =>
    thirdFetch.some(item => item === newsItem)
  );
  console.log(`Cache used for pages 1, 2, and 3: ${isCacheUsed}`);
  expect(isCacheUsed).toBe(true);
});