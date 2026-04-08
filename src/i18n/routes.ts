export const routes = {
  products: { en: "products", it: "prodotti" },
  gallery: { en: "gallery", it: "galleria" },
  "news-events": { en: "news-events", it: "notizie-eventi" },
  downloads: { en: "downloads", it: "download" },
  "about-us": { en: "about-us", it: "chi-siamo" }
};

export function getLocalizedPath(path: string, locale: string) {
  // Remove leading slash if present
  const baseSegment = path.replace(/^\//, '');
  
  for (const [enKey, translations] of Object.entries(routes)) {
    const transMap = translations as Record<string, string>;
    if (enKey === baseSegment || Object.values(transMap).includes(baseSegment)) {
      return '/' + (transMap[locale] || enKey);
    }
  }
  
  return path;
}
