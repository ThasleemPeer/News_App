import { format } from 'date-fns';
import { ExternalLink } from 'lucide-react';
import { Article } from '../types/news';

interface NewsCardProps {
  article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.urlToImage || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=60'}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm">
          {article.source.name}
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{format(new Date(article.publishedAt), 'MMM dd, yyyy')}</span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            Read more <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}