import React from 'react';
import { Search } from 'lucide-react';
import { SearchCategory } from '../types';
import { VoiceSearch } from './VoiceSearch';

interface SearchBarProps {
  onSearch: (query: string, category: SearchCategory) => void;
  category: SearchCategory;
  setCategory: (category: SearchCategory) => void;
}

export function SearchBar({ onSearch, category, setCategory }: SearchBarProps) {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, category);
    }
  };

  const handleVoiceResult = (text: string) => {
    setQuery(text);
    onSearch(text, category);
  };

  const categories: SearchCategory[] = ['astronaut', 'rover', 'satellite', 'planet', 'event', 'mission'];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl">
      <div className="flex flex-col gap-4 md:flex-row">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as SearchCategory)}
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} className="text-black">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        
        <div className="flex-1 relative flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search NASA database..."
              className="w-full px-4 py-2 pl-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
          </div>
          <VoiceSearch onResult={handleVoiceResult} />
        </div>
        
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}