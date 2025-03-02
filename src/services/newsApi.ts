import axios from 'axios';
import { NewsResponse } from '../types/news';
import { mockNews } from '../data/mockNews';

const API_KEY = 'YOUR_API_KEY'; // Replace with actual API key
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async (category: string = 'general') => {
  try {
    const response = await axios.get<NewsResponse>(`${BASE_URL}/top-headlines`, {
      params: {
        country: 'us',
        category,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    // Return mock data when API fails
    return {
      status: 'ok',
      totalResults: mockNews[category]?.length || 0,
      articles: mockNews[category] || mockNews.general
    };
  }
};

export const searchNews = async (query: string) => {
  try {
    const response = await axios.get<NewsResponse>(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey: API_KEY,
        sortBy: 'publishedAt',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching news:', error);
    // Search through mock data when API fails
    const searchResults = Object.values(mockNews)
      .flat()
      .filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
      );
    
    return {
      status: 'ok',
      totalResults: searchResults.length,
      articles: searchResults
    };
  }
};