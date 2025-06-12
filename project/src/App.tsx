import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { HeroSection } from './components/HeroSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ResultsSection } from './components/ResultsSection';
import { TimelineSection } from './components/TimelineSection';
import { NewsSection } from './components/NewsSection';
import { searchNASAData } from './services/api';
import { spaceTimeline } from './data/spaceTimeline';
import { SearchCategory } from './types';

const queryClient = new QueryClient();

function NasaPortal() {
  const [category, setCategory] = React.useState<SearchCategory>('planet');
  const [searchTerm, setSearchTerm] = React.useState('');

  const { data: results, isLoading } = useQuery(
    ['nasaData', searchTerm, category],
    () => searchNASAData(searchTerm, category),
    {
      enabled: !!searchTerm,
    }
  );

  const handleSearch = (query: string, selectedCategory: SearchCategory) => {
    setSearchTerm(query);
  };

  return (
    <div className="min-h-screen bg-[#0B1026] text-white">
      <HeroSection
        onSearch={handleSearch}
        category={category}
        setCategory={setCategory}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <CategoriesSection />
        <ResultsSection
          searchTerm={searchTerm}
          isLoading={isLoading}
          results={results}
        />
        <TimelineSection events={spaceTimeline} />
        <NewsSection />
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NasaPortal />
    </QueryClientProvider>
  );
}

export default App;