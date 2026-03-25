import type { APIRoute } from 'astro';
import { contentfulClient } from "@/libs/content/contentful/data";

export const GET: APIRoute = async () => {
  const siteUrl = "https://www.vimecvalves.co.uk";
  const locales = ['en', 'it'];
  const staticRoutes = [
    '',
    '/about_us',
    '/contact_us',
    '/downloads',
    '/products',
    '/gallery'
  ];

  // Fetch all dynamically created product and gallery entries from Contentful
  const products = await contentfulClient.getEntries({ content_type: "product" });
  const gallery = await contentfulClient.getEntries({ content_type: "gallery" });

  const urls: string[] = [];

  // Map absolute URLs with locale prefixes
  locales.forEach((locale) => {
    // Basic static pages
    staticRoutes.forEach((route) => {
      urls.push(`/${locale}${route}`);
    });

    // Individual dynamic product pages
    if (products?.items) {
      products.items.forEach((item) => {
        urls.push(`/${locale}/products/${item.sys.id}`);
      });
    }

    // Individual dynamic gallery pages
    if (gallery?.items) {
      gallery.items.forEach((item) => {
        urls.push(`/${locale}/gallery/${item.sys.id}`);
      });
    }
  });

  // Construct standard sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `<url><loc>${siteUrl}${url}</loc></url>`).join('\n  ')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    }
  });
};
