export type SearchCategory = 'astronaut' | 'rover' | 'satellite' | 'planet' | 'event' | 'mission';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  image?: string;
  date?: string;
  category: SearchCategory;
  details: Record<string, any>;
}