import { Article } from '../types/news';

export const mockNews: Record<string, Article[]> = {
  general: [
    {
      source: { id: 'news-hub', name: 'NewsHub' },
      author: 'Sarah Johnson',
      title: 'Global Climate Summit Reaches Historic Agreement',
      description: 'World leaders have reached a landmark agreement on climate change, setting ambitious targets for reducing carbon emissions by 2030.',
      url: 'https://example.com/climate-summit',
      urlToImage: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T08:00:00Z',
      content: 'World leaders have reached a landmark agreement on climate change...'
    },
    {
      source: { id: 'news-hub', name: 'NewsHub' },
      author: 'Michael Chen',
      title: 'Breakthrough in Quantum Computing Announced',
      description: 'Scientists have achieved a major milestone in quantum computing, successfully maintaining quantum coherence for over an hour.',
      url: 'https://example.com/quantum-computing',
      urlToImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T09:15:00Z',
      content: 'Scientists have achieved a major milestone in quantum computing...'
    }
  ],
  technology: [
    {
      source: { id: 'tech-daily', name: 'Tech Daily' },
      author: 'Alex Rivera',
      title: 'Revolutionary AI Model Breaks All Previous Records',
      description: 'A new artificial intelligence model has demonstrated unprecedented capabilities in natural language processing and problem-solving.',
      url: 'https://example.com/ai-breakthrough',
      urlToImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T10:30:00Z',
      content: 'A new artificial intelligence model has demonstrated unprecedented capabilities...'
    },
    {
      source: { id: 'tech-daily', name: 'Tech Daily' },
      author: 'Emily Zhang',
      title: 'Next-Generation Solar Cells Achieve 50% Efficiency',
      description: 'Researchers have developed a new type of solar cell that converts sunlight to electricity with unprecedented efficiency.',
      url: 'https://example.com/solar-breakthrough',
      urlToImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T11:45:00Z',
      content: 'Researchers have developed a new type of solar cell...'
    }
  ],
  business: [
    {
      source: { id: 'business-weekly', name: 'Business Weekly' },
      author: 'James Wilson',
      title: 'Global Markets Rally on Economic Recovery Signs',
      description: 'Stock markets worldwide surge as new economic data suggests a strong recovery in global trade and manufacturing.',
      url: 'https://example.com/market-rally',
      urlToImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T13:00:00Z',
      content: 'Stock markets worldwide surge as new economic data suggests...'
    },
    {
      source: { id: 'business-weekly', name: 'Business Weekly' },
      author: 'Lisa Thompson',
      title: 'Revolutionary Startup Secures $1B in Funding',
      description: 'A startup focusing on sustainable energy storage solutions has secured record-breaking funding in its latest round.',
      url: 'https://example.com/startup-funding',
      urlToImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T14:15:00Z',
      content: 'A startup focusing on sustainable energy storage solutions...'
    }
  ],
  sports: [
    {
      source: { id: 'sports-central', name: 'Sports Central' },
      author: 'David Martinez',
      title: 'Underdog Team Wins Championship in Historic Upset',
      description: 'In a stunning turn of events, the underdog team has clinched the championship title, breaking a 30-year drought.',
      url: 'https://example.com/championship-upset',
      urlToImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T15:30:00Z',
      content: 'In a stunning turn of events, the underdog team has clinched...'
    },
    {
      source: { id: 'sports-central', name: 'Sports Central' },
      author: 'Maria Rodriguez',
      title: 'New World Record Set in Marathon',
      description: 'Elite athlete breaks world record in marathon, completing the race in unprecedented time.',
      url: 'https://example.com/marathon-record',
      urlToImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T16:45:00Z',
      content: 'Elite athlete breaks world record in marathon...'
    }
  ],
  entertainment: [
    {
      source: { id: 'entertainment-now', name: 'Entertainment Now' },
      author: 'Rachel Kim',
      title: 'Indie Film Sweeps Awards Season',
      description: 'A small-budget independent film has dominated major award ceremonies, winning unprecedented acclaim.',
      url: 'https://example.com/indie-film-awards',
      urlToImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T18:00:00Z',
      content: 'A small-budget independent film has dominated major award ceremonies...'
    },
    {
      source: { id: 'entertainment-now', name: 'Entertainment Now' },
      title: 'Virtual Reality Concert Breaks Attendance Records',
      author: 'Tom Anderson',
      description: 'A groundbreaking virtual reality concert has set new records for online attendance and engagement.',
      url: 'https://example.com/vr-concert',
      urlToImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T19:15:00Z',
      content: 'A groundbreaking virtual reality concert has set new records...'
    }
  ],
  health: [
    {
      source: { id: 'health-digest', name: 'Health Digest' },
      author: 'Dr. Sarah Lee',
      title: 'New Treatment Shows Promise for Chronic Conditions',
      description: 'Researchers have developed a revolutionary treatment approach that shows remarkable results for multiple chronic conditions.',
      url: 'https://example.com/health-breakthrough',
      urlToImage: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T20:30:00Z',
      content: 'Researchers have developed a revolutionary treatment approach...'
    },
    {
      source: { id: 'health-digest', name: 'Health Digest' },
      author: 'Dr. John Smith',
      title: 'Study Reveals New Benefits of Mediterranean Diet',
      description: 'Long-term study uncovers additional health benefits of following a Mediterranean diet, particularly for brain health.',
      url: 'https://example.com/diet-study',
      urlToImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T21:45:00Z',
      content: 'Long-term study uncovers additional health benefits...'
    }
  ],
  science: [
    {
      source: { id: 'science-daily', name: 'Science Daily' },
      author: 'Dr. Robert Brown',
      title: 'Mars Mission Discovers Signs of Ancient Life',
      description: 'Latest Mars rover mission has uncovered compelling evidence of ancient microbial life on the red planet.',
      url: 'https://example.com/mars-discovery',
      urlToImage: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-26T23:00:00Z',
      content: 'Latest Mars rover mission has uncovered compelling evidence...'
    },
    {
      source: { id: 'science-daily', name: 'Science Daily' },
      author: 'Dr. Emma White',
      title: 'Fusion Breakthrough: Sustainable Energy Within Reach',
      description: 'Scientists achieve sustained fusion reaction, marking a significant step toward unlimited clean energy.',
      url: 'https://example.com/fusion-breakthrough',
      urlToImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=60',
      publishedAt: '2025-02-27T00:15:00Z',
      content: 'Scientists achieve sustained fusion reaction...'
    }
  ]
};