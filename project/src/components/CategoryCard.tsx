import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export function CategoryCard({ icon: Icon, title, description, iconColor }: CategoryCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
      <Icon className={`w-12 h-12 mb-4 ${iconColor}`} />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-white/70">{description}</p>
    </div>
  );
}