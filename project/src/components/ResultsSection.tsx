import React from 'react';
import { ResultCard } from './ResultCard';
import { SearchResult } from '../types';

interface ResultsSectionProps {
  searchTerm: string;
  isLoading: boolean;
  results?: SearchResult[];
}

export function ResultsSection({ searchTerm, isLoading, results }: ResultsSectionProps) {
  if (!searchTerm) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Search Results</h2>
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results?.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
}