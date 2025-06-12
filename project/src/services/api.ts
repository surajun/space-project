import axios from 'axios';
import { SearchCategory, SearchResult } from '../types';

const NASA_API_KEY = 'DEMO_KEY';
const NASA_API = axios.create({
  baseURL: 'https://api.nasa.gov',
});

export async function searchNASAData(query: string, category: SearchCategory): Promise<SearchResult[]> {
  try {
    const [imagesResponse, apodResponse] = await Promise.all([
      axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image`),
      NASA_API.get('/planetary/apod', {
        params: {
          api_key: NASA_API_KEY,
          count: 5,
        },
      }),
    ]);

    const imageResults = imagesResponse.data.collection.items.map((item: any) => ({
      id: item.data[0].nasa_id,
      title: item.data[0].title,
      description: item.data[0].description,
      image: item.links?.[0]?.href,
      date: item.data[0].date_created,
      category,
      details: item.data[0],
    }));

    const apodResults = apodResponse.data.map((apod: any) => ({
      id: apod.date,
      title: apod.title,
      description: apod.explanation,
      image: apod.url,
      date: apod.date,
      category: 'event',
      details: apod,
    }));

    return [...imageResults, ...apodResults];
  } catch (error) {
    console.error('Error fetching NASA data:', error);
    return [];
  }
}

export async function textToSpeech(text: string) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
}