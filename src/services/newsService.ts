import cheerio from 'cheerio';

interface NewsItem {
  title: string;
  points: number;
  send_by: string;
  published: string;
  comments: number;
}

export const cache: { [page: number]: NewsItem[] } = {};

export const fetchNews = async (pages: number): Promise<NewsItem[]> => {
  let news: NewsItem[] = [];

  for (let i = 1; i <= pages; i++) {
    if (cache[i]) {
      news = news.concat(cache[i]);
    } else {
      const response = await fetch(`https://news.ycombinator.com/news?p=${i}`);
      const html = await response.text();
      const data = parseNews(html);
      cache[i] = data;
      news = news.concat(data);
    }
  }

  return news;
};

export const parseNews = (html: string): NewsItem[] => {
  const $ = cheerio.load(html);
  const items: NewsItem[] = [];

  $('.athing').each((index, element) => {
    const titleElement = $(element).find('.titleline a').first();
    const title = titleElement.text().trim();

    const subtext = $(element).next().find('.subtext');
    const points = parseInt(subtext.find('.score').text().split(' ')[0]) || 0;
    const send_by = subtext.find('.hnuser').text();
    const published = subtext.find('.age').text();
    const comments = parseInt(subtext.find('a').last().text().split(' ')[0]) || 0;

    items.push({ title, points, send_by, published, comments });
  });

  return items;
};
