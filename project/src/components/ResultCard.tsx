import React from 'react';
import { SearchResult } from '../types';

interface ResultCardProps {
  result: SearchResult;
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all">
      {result.image && (
        <img
          src={result.image}
          alt={result.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{result.title}</h3>
        <p className="text-white/70 text-sm mb-4">{result.description}</p>
        {result.date && (
          <p className="text-white/50 text-xs">
            Date: {new Date(result.date).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}