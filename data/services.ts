import { PlatformService } from '../types';

/**
 * FAKE Tek Service Inventory
 * 
 * Structured service map organized by Platform → Capability → Variant
 * Used for clean UI rendering and documentation.
 * 
 * NOT marketing copy. This is a structured system map.
 */

export const PLATFORM_SERVICES: PlatformService[] = [
  // A. DAY-1 CORE SOCIAL PLATFORMS
  {
    id: 'twitter-x',
    name: 'X / Twitter',
    description: 'Tools to observe and study engagement velocity, interaction distribution, and visibility signals across X.',
    category: 'social',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Followers',
        variants: [
          { name: 'Standard Followers' },
          { name: 'Non-Drop Followers' },
          { name: 'Old Accounts' },
          { name: 'Targeted Followers' }
        ]
      },
      {
        category: 'Engagement',
        variants: [
          { name: 'Likes' },
          { name: 'Retweets' },
          { name: 'Mentions' },
          { name: 'Poll Votes' },
          { name: 'Comments' }
        ]
      },
      {
        category: 'Visibility',
        variants: [
          { name: 'Views / Live / Comments' },
          { name: 'Impressions' },
          { name: 'Bookmarks' },
          { name: 'Spaces Listeners' }
        ]
      },
      {
        category: 'Specialized',
        variants: [
          { name: 'NFT-related Services' },
          { name: 'Regional Services (EG / ARAB)' },
          { name: 'Packages' }
        ]
      }
    ]
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    description: 'Used to analyze discovery mechanics, live amplification behavior, and interaction timing.',
    category: 'social',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Followers',
        variants: [
          { name: 'Global Followers' },
          { name: 'Country Targeted Followers' },
          { name: 'No Drop / Low Drop' }
        ]
      },
      {
        category: 'Engagement',
        variants: [
          { name: 'Views' },
          { name: 'Likes' },
          { name: 'Comments' },
          { name: 'Shares / Saves / Downloads' }
        ]
      },
      {
        category: 'Live',
        variants: [
          { name: 'Live Views (Standard)' },
          { name: 'Live Views (ARAB)' },
          { name: 'Live Likes / Shares / Comments' }
        ]
      },
      {
        category: 'Specialized',
        variants: [
          { name: 'PK Battle Points' },
          { name: 'Auto Services' },
          { name: 'Explore' }
        ]
      }
    ]
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Visibility signal analysis across feed, reels, stories, and emerging formats (Threads).',
    category: 'social',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Followers',
        variants: [
          { name: 'Guaranteed Followers' },
          { name: 'Non-Guaranteed Followers' },
          { name: 'Targeted Followers' },
          { name: 'Regional (EU, US, BR, KR, NG, IT, TR)' }
        ]
      },
      {
        category: 'Likes',
        variants: [
          { name: 'Standard Likes' },
          { name: 'Bots Likes' },
          { name: 'Targeted Likes' },
          { name: 'Power Likes' },
          { name: 'Per-Minute Likes' },
          { name: 'Auto Likes' }
        ]
      },
      {
        category: 'Views',
        variants: [
          { name: 'Post Views' },
          { name: 'Reels Views' },
          { name: 'IGTV Views' },
          { name: 'Auto Views' }
        ]
      },
      {
        category: 'Stories & Live',
        variants: [
          { name: 'Story Views' },
          { name: 'Live Views' },
          { name: 'Reel Views' }
        ]
      },
      {
        category: 'Engagement',
        variants: [
          { name: 'Reach / Impressions' },
          { name: 'Saves' },
          { name: 'Mentions' },
          { name: 'Comments (including verified/top accounts)' }
        ]
      },
      {
        category: 'Threads',
        variants: [
          { name: 'Threads Likes' },
          { name: 'Threads Followers' },
          { name: 'Threads Comments' }
        ]
      },
      {
        category: 'Packages',
        variants: [
          { name: 'Growth Packages (Monthly)' },
          { name: 'NFT Services' }
        ]
      }
    ]
  },
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Studying legacy platform signal weighting and regional engagement patterns.',
    category: 'social',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Page Engagement',
        variants: [
          { name: 'Page Likes (Standard)' },
          { name: 'Page Likes (Targeted)' }
        ]
      },
      {
        category: 'Post Engagement',
        variants: [
          { name: 'Post Likes (Standard)' },
          { name: 'Post Likes (Emoji)' },
          { name: 'Post Likes (Targeted)' },
          { name: 'Comments' },
          { name: 'Shares' }
        ]
      },
      {
        category: 'Video & Media',
        variants: [
          { name: 'Video Views' },
          { name: 'Story Views' }
        ]
      },
      {
        category: 'Community',
        variants: [
          { name: 'Followers' },
          { name: 'Friends' },
          { name: 'Groups' },
          { name: 'Ratings' }
        ]
      },
      {
        category: 'Live',
        variants: [
          { name: 'Live Stream (Standard)' },
          { name: 'Live Stream (Server 2)' },
          { name: 'Live Stream (Always Working)' }
        ]
      },
      {
        category: 'Regional',
        variants: [
          { name: 'USA Services' },
          { name: 'EU/GB Services' },
          { name: 'BR Services' },
          { name: 'EG Services' },
          { name: 'IT Services' },
          { name: 'KR Services' },
          { name: 'TW Services' },
          { name: 'TH Services' }
        ]
      },
      {
        category: 'Packages',
        variants: [
          { name: 'Engagement Packages' }
        ]
      }
    ]
  },
  {
    id: 'telegram',
    name: 'Telegram',
    description: 'Community growth dynamics, message propagation, and reaction density analysis.',
    category: 'messaging',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Members',
        variants: [
          { name: 'Standard Members' },
          { name: 'Country Targeted Members' }
        ]
      },
      {
        category: 'Engagement',
        variants: [
          { name: 'Views (Standard)' },
          { name: 'Views (Targeted)' },
          { name: 'Auto Views' },
          { name: 'Reactions' },
          { name: 'Comments' },
          { name: 'Shares' },
          { name: 'Votes' }
        ]
      },
      {
        category: 'Specialized',
        variants: [
          { name: 'Channel Post Stars ⭐' }
        ]
      }
    ]
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    description: 'Short-form discovery mechanics and spotlight exposure behavior.',
    category: 'social',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Followers',
        variants: [
          { name: 'ARAB Followers' },
          { name: 'EUROPE + USA Followers' }
        ]
      },
      {
        category: 'Views',
        variants: [
          { name: 'ARAB Views' },
          { name: 'EUROPE + USA Views' }
        ]
      },
      {
        category: 'Engagement',
        variants: [
          { name: 'Engagements' },
          { name: 'Spotlight' }
        ]
      }
    ]
  },
  // B. STREAMING & CREATOR PLATFORMS
  {
    id: 'kick',
    name: 'Kick.com',
    description: 'Live concurrency, retention windows, and streamer discovery mechanics.',
    category: 'streaming',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Live Views',
        variants: [
          { name: 'LiveStream Views (15-1440 mins)' },
          { name: 'Concurrent View Packages' },
          { name: 'HQ Live Views' },
          { name: 'Subscription-based Live Views' }
        ]
      },
      {
        category: 'Followers',
        variants: [
          { name: 'Standard Followers' },
          { name: 'Refill Followers' },
          { name: 'HQ Followers' }
        ]
      }
    ]
  },
  {
    id: 'twitch',
    name: 'Twitch',
    description: 'Live ranking pressure, concurrency thresholds, and clip amplification.',
    category: 'streaming',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Followers',
        variants: [
          { name: 'Standard Followers' },
          { name: 'Various Refill Windows' }
        ]
      },
      {
        category: 'Live Views',
        variants: [
          { name: 'Timed Live Views' },
          { name: 'HQ Live Views' },
          { name: 'USA Views' },
          { name: 'Global Views' }
        ]
      },
      {
        category: 'Content',
        variants: [
          { name: 'Video Views' },
          { name: 'Clip Views' },
          { name: 'Channel Views (Packages)' }
        ]
      }
    ]
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Community presence, perceived activity, and server momentum.',
    category: 'messaging',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Members',
        variants: [
          { name: 'Server Members' },
          { name: 'Online Members' },
          { name: 'Username-based Members' },
          { name: 'Long-duration Online Members' }
        ]
      },
      {
        category: 'Boosts',
        variants: [
          { name: 'Discord Boosts (Planned)' }
        ]
      }
    ]
  },
  // C. CONTENT & MEDIA DISTRIBUTION
  {
    id: 'podcasts-itunes',
    name: 'Podcasts / iTunes',
    description: 'Chart momentum, regional discovery, and ranking persistence.',
    category: 'content',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Downloads',
        variants: [
          { name: 'Worldwide Downloads' },
          { name: 'USA Downloads' },
          { name: 'UK Downloads' },
          { name: 'MIX Downloads' }
        ]
      },
      {
        category: 'Engagement',
        variants: [
          { name: 'Streams' },
          { name: 'Subscribers' },
          { name: 'Ratings (4-5 star)' },
          { name: 'Promotion Subscriptions' }
        ]
      }
    ]
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    description: 'Evergreen content resurfacing and board-based discovery.',
    category: 'content',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Engagement',
        variants: [
          { name: 'Pin Likes' },
          { name: 'Followers (Profile)' },
          { name: 'Followers (Board)' },
          { name: 'RePins' }
        ]
      }
    ]
  },
  {
    id: 'tumblr',
    name: 'Tumblr',
    description: 'Niche community amplification and long-tail content loops.',
    category: 'content',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Engagement',
        variants: [
          { name: 'Followers' },
          { name: 'Likes' },
          { name: 'Reblogs' },
          { name: 'Long-term Refill Variants' }
        ]
      }
    ]
  },
  // D. CRYPTO / NFT / LISTING ECOSYSTEM
  {
    id: 'crypto-discovery',
    name: 'Crypto Discovery Platforms',
    description: 'Market perception, list ranking pressure, and visibility cascades.',
    category: 'crypto',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Platforms',
        variants: [
          { name: 'CoinMarketCap' },
          { name: 'CoinGecko' },
          { name: 'CoinMooner' },
          { name: 'FreshCoins' },
          { name: 'CoinsGods' },
          { name: 'CoinAlpha' },
          { name: 'CoinScope' },
          { name: 'CoinSniper' },
          { name: 'CoinHunt' },
          { name: 'CoinVote' },
          { name: 'Watcher' },
          { name: 'GemFinder' },
          { name: 'BlockFolio (incl. canny.io)' }
        ]
      },
      {
        category: 'Services',
        variants: [
          { name: 'Upvotes' },
          { name: 'Watchlists' },
          { name: 'Trending Page Placement' },
          { name: 'All-Time Best Rankings' }
        ]
      }
    ]
  },
  {
    id: 'nft-platforms',
    name: 'NFT Platforms',
    description: 'Collection discovery and marketplace attention flow.',
    category: 'crypto',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Platforms',
        variants: [
          { name: 'OpenSea' },
          { name: 'Rarible' },
          { name: 'NFTSniper' }
        ]
      },
      {
        category: 'Services',
        variants: [
          { name: 'Views' },
          { name: 'Favorites' },
          { name: 'Votes' },
          { name: 'Followers' }
        ]
      }
    ]
  },
  // E. WHATSAPP
  {
    id: 'whatsapp',
    name: 'WhatsApp Channels',
    description: 'Broadcast reach and reaction density in closed networks.',
    category: 'messaging',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Members',
        variants: [
          { name: 'Worldwide Members' },
          { name: 'Regional Members' }
        ]
      },
      {
        category: 'Reactions',
        variants: [
          { name: 'Like' },
          { name: 'Love' },
          { name: 'Haha' },
          { name: 'Wow' },
          { name: 'Sad' },
          { name: 'Random' }
        ]
      }
    ]
  },
  // F. TRAFFIC & SPECIALIZED
  {
    id: 'mobile-adult-traffic',
    name: 'Mobile Adult Traffic',
    description: 'Traffic source behavior and conversion flow analysis.',
    category: 'traffic',
    launchStatus: 'day1',
    capabilities: [
      {
        category: 'Traffic Types',
        variants: [
          { name: 'iPhone Traffic' },
          { name: 'Regional Targeting (US, EU, JP, BR, etc.)' },
          { name: 'Language Targeting' }
        ]
      },
      {
        category: 'Use Cases',
        variants: [
          { name: 'Adult Creators' },
          { name: 'OF Models' },
          { name: 'AI Model Companies' }
        ]
      }
    ]
  }
];

// Helper functions for filtering
export const getServicesByCategory = (category: PlatformService['category']) => {
  return PLATFORM_SERVICES.filter(service => service.category === category);
};

export const getDay1Services = () => {
  return PLATFORM_SERVICES.filter(service => service.launchStatus === 'day1');
};

export const searchServices = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return PLATFORM_SERVICES.filter(service => {
    return (
      service.name.toLowerCase().includes(lowerQuery) ||
      service.description.toLowerCase().includes(lowerQuery) ||
      service.capabilities.some(cap =>
        cap.category.toLowerCase().includes(lowerQuery) ||
        cap.variants.some(v => v.name.toLowerCase().includes(lowerQuery))
      )
    );
  });
};
