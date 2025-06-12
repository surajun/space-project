import React from 'react';
import { useQuery } from 'react-query';
import { Newspaper, AlertCircle } from 'lucide-react';
import { fetchSpaceNews, SpaceNewsArticle } from '../services/spaceNews';
import { format, parseISO } from 'date-fns';

export function NewsSection() {
  const { data: news, isLoading, error } = useQuery('spaceNews', fetchSpaceNews);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12 text-red-400">
        <AlertCircle className="w-6 h-6 mr-2" />
        <span>Failed to load space news</span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Newspaper className="w-8 h-8 text-blue-400" />
        <h2 className="text-3xl font-bold text-white">Latest Space News</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news?.map((article: SpaceNewsArticle) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all"
          >
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
              <p className="text-white/70 text-sm mb-4">{article.summary}</p>
              <div className="flex justify-between items-center text-white/50 text-xs">
                <span>{article.newsSite}</span>
                <span>
                  {article.publishedAt
                    ? format(parseISO(article.publishedAt), 'MMM d, yyyy')
                    : 'Date unavailable'}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}