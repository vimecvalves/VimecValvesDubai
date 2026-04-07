import type { APIRoute } from 'astro';
import { contentfulClient } from "@/libs/content/contentful/data";
import { slugify } from "@/libs/utils/slugify";

export const GET: APIRoute = async () => {
  const siteUrl = "https://www.vimecvalves.co.uk";
  const locales = ['en', 'it'];
  
  const staticRoutes = [
    '',
    '/about-us',
    '/contact-us',
    '/downloads',
    '/products',
    '/gallery',
    '/news-events'
  ];

  // Fetch all dynamically created product, gallery, news, and about-us entries from Contentful
  const products = await contentfulClient.getEntries({ content_type: "product" });
  const gallery = await contentfulClient.getEntries({ content_type: "gallery" });
  const news = await contentfulClient.getEntries({ content_type: "newsEvents" });
  const aboutUs = await contentfulClient.getEntries({ content_type: "departmentAboutUs" });

  const urls = new Map<string, string>();
  const today = new Date().toISOString();

  function createUrlBlock(loc: string, lastmod: string, alternates: string) {
    return `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
${alternates}
</url>`;
  }

  const pushPath = (pathWithoutLocale: string, updatedAt: string = today) => {
    locales.forEach((currentLocale) => {
      const loc = `${siteUrl}/${currentLocale}${pathWithoutLocale}`;
      
      const alternatesArray = locales.map(
        (altLocale) => `  <xhtml:link rel="alternate" hreflang="${altLocale}" href="${siteUrl}/${altLocale}${pathWithoutLocale}" />`
      );
      alternatesArray.push(`  <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en${pathWithoutLocale}" />`);
      
      const alternates = alternatesArray.join('\n');
      
      if (!urls.has(loc)) {
        urls.set(loc, createUrlBlock(loc, updatedAt, alternates));
      }
    });
  };

  // Add static paths
  staticRoutes.forEach((route) => {
    pushPath(route);
  });

  // Add dynamic product paths
  if (products?.items) {
    products.items.forEach((item) => {
      // @ts-ignore
      const slug = item.fields.slug ?? slugify(item.fields.name);
      pushPath(`/products/${slug}`, new Date(item.sys.updatedAt).toISOString());
    });
  }

  // Add dynamic gallery paths
  if (gallery?.items) {
    gallery.items.forEach((item) => {
      // @ts-ignore
      const slug = item.fields.slug ?? slugify(item.fields.title);
      pushPath(`/gallery/${slug}`, new Date(item.sys.updatedAt).toISOString());
    });
  }

  // Add dynamic news-events paths
  if (news?.items) {
    news.items.forEach((item) => {
      // @ts-ignore
      const slug = item.fields.slug ?? slugify(item.fields.title);
      pushPath(`/news-events/${slug}`, new Date(item.sys.updatedAt).toISOString());
    });
  }

  // Add dynamic about-us paths
  if (aboutUs?.items) {
    aboutUs.items.forEach((item) => {
      // @ts-ignore
      const slug = item.fields.slug ?? slugify(item.fields.title);
      pushPath(`/about-us/${slug}`, new Date(item.sys.updatedAt).toISOString());
    });
  }

  const allUrlBlocks = Array.from(urls.values()).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrlBlocks}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400"
    }
  });
};
