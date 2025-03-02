import { useEffect, useState } from 'react';
import { Newspaper } from 'lucide-react';
import { CategoryFilter } from './components/CategoryFilter';
import { NewsCard } from './components/NewsCard';
import { SearchBar } from './components/SearchBar';
import { getTopHeadlines, searchNews } from './services/newsApi';
import type { Article } from './types/news';

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingMockData, setIsUsingMockData] = useState(false);

  const fetchNews = async (category: string = 'general') => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTopHeadlines(category);
      setArticles(data.articles);
      // Check if we're using mock data by looking at the source
      setIsUsingMockData(data.articles[0]?.source.id === 'news-hub' || 
                        data.articles[0]?.source.id === 'tech-daily' ||
                        data.articles[0]?.source.id === 'business-weekly');
    } catch (err) {
      setError('Failed to fetch news. Using backup data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchNews(query);
      setArticles(data.articles);
      // Check if we're using mock data
      setIsUsingMockData(data.articles[0]?.source.id === 'news-hub' || 
                        data.articles[0]?.source.id === 'tech-daily' ||
                        data.articles[0]?.source.id === 'business-weekly');
    } catch (err) {
      setError('Failed to search news. Using backup data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Newspaper className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">NewsHub</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter onCategoryChange={fetchNews} />

        {isUsingMockData && (
          <div className="mb-8 bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">Currently showing backup news data. Live API data is unavailable.</span>
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <NewsCard key={`${article.url}-${index}`} article={article} />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500">© 2025 NewsHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;