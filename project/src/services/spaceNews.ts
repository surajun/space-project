import axios from 'axios';

const SPACEFLIGHT_NEWS_API = 'https://api.spaceflightnewsapi.net/v4/articles';

export interface SpaceNewsArticle {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
}

export async function fetchSpaceNews(): Promise<SpaceNewsArticle[]> {
  try {
    const response = await axios.get(`${SPACEFLIGHT_NEWS_API}?limit=6`);
    return response.data.results.map((article: any) => ({
      id: article.id,
      title: article.title,
      url: article.url,
      imageUrl: article.image_url,
      newsSite: article.news_site,
      summary: article.summary,
      publishedAt: article.published_at,
    }));
  } catch (error) {
    console.error('Error fetching space news:', error);
    throw error;
  }
}