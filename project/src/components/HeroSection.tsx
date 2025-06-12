import React from 'react';
import { SearchBar } from './SearchBar';
import { SearchCategory } from '../types';

interface HeroSectionProps {
  onSearch: (query: string, category: SearchCategory) => void;
  category: SearchCategory;
  setCategory: (category: SearchCategory) => void;
}

export function HeroSection({ onSearch, category, setCategory }: HeroSectionProps) {
  return (
    <div
      className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NASA Information Portal</h1>
        <p className="text-xl text-white/80 mb-8">
          Explore the cosmos through NASA's vast database
        </p>
        <SearchBar
          onSearch={onSearch}
          category={category}
          setCategory={setCategory}
        />
      </div>
    </div>
  );
}