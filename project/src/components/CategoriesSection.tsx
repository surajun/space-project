import React from 'react';
import { RocketIcon, SatelliteIcon, GlobeIcon } from 'lucide-react';
import { CategoryCard } from './CategoryCard';

export function CategoriesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <CategoryCard
        icon={RocketIcon}
        title="Missions & Astronauts"
        description="Discover NASA's historic missions and the brave astronauts who made them possible."
        iconColor="text-blue-400"
      />
      <CategoryCard
        icon={SatelliteIcon}
        title="Satellites & Rovers"
        description="Explore the technology that helps us understand our universe."
        iconColor="text-purple-400"
      />
      <CategoryCard
        icon={GlobeIcon}
        title="Celestial Bodies"
        description="Learn about planets, stars, and other astronomical phenomena."
        iconColor="text-green-400"
      />
    </div>
  );
}