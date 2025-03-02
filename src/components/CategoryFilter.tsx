import { useState } from 'react';

const categories = [
  'general',
  'business',
  'technology',
  'entertainment',
  'health',
  'science',
  'sports',
];

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState('general');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors
            ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}