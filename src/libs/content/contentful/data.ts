import { createClient } from 'contentful';

const rawClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: 'cdn.contentful.com',
});

// SSR In-memory Cache for Contentful API Requests
// Bypasses the 1-2 second blocking delays during Astro View Transitions
const ssrCache = new Map<string, { timestamp: number; data: any }>();
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

export const contentfulClient = {
  ...rawClient,
  getEntries: async <T extends import("contentful").EntrySkeletonType>(
    query?: any
  ): Promise<import("contentful").EntryCollection<T>> => {
    const key = JSON.stringify(query || {});
    const cached = ssrCache.get(key);
    
    // Return cached response if within TTL
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.data;
    }
    
    // Fetch, store, and return
    const data = await rawClient.getEntries<T>(query);
    ssrCache.set(key, { timestamp: Date.now(), data });
    return data;
  }
};
