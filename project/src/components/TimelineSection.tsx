import React from 'react';
import { format } from 'date-fns';
import { Rocket, Star, Trophy } from 'lucide-react';
import { TimelineEvent } from '../data/spaceTimeline';

interface TimelineSectionProps {
  events: TimelineEvent[];
}

export function TimelineSection({ events }: TimelineSectionProps) {
  const getCategoryIcon = (category: TimelineEvent['category']) => {
    switch (category) {
      case 'mission':
        return <Rocket className="w-6 h-6 text-blue-400" />;
      case 'discovery':
        return <Star className="w-6 h-6 text-purple-400" />;
      case 'achievement':
        return <Trophy className="w-6 h-6 text-yellow-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Space Exploration Timeline</h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20"></div>
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`relative flex items-center mb-8 ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="w-1/2" />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center">
                {getCategoryIcon(event.category)}
              </div>
            </div>
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'
              }`}
            >
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <span className="text-sm text-white/60">
                  {format(new Date(event.date), 'MMMM d, yyyy')}
                </span>
                <h3 className="text-xl font-bold mt-1 mb-2 text-white">{event.title}</h3>
                <p className="text-white/70">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}