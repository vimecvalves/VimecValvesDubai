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

  // Fetch all dynamically created product, gallery, and news entries from Contentful
  const products = await contentfulClient.getEntries({ content_type: "product" });
  const gallery = await contentfulClient.getEntries({ content_type: "gallery" });
  const news = await contentfulClient.getEntries({ content_type: "newsEvents" });
  const aboutUs = await contentfulClient.getEntries({ content_type: "departmentAboutUs" });

  const urlEntries = new Set<string>();

  const today = new Date().toISOString();

  // Helper to generate the URL blocks with hreflangs
  const pushUrlBlock = (pathWithoutLocale: string, updatedAt: string = today) => {
    locales.forEach((currentLocale) => {
      const loc = `${siteUrl}/${currentLocale}${pathWithoutLocale}`;
      const alternates = locales.map(
        (altLocale) => `  <xhtml:link rel="alternate" hreflang="${altLocale}" href="${siteUrl}/${altLocale}${pathWithoutLocale}"/>`
      ).join('\n');
      
      const xDefault = `  <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en${pathWithoutLocale}"/>`;

      urlEntries.add(`<url>
  <loc>${loc}</loc>
  <lastmod>${updatedAt}</lastmod>
${alternates}
${xDefault}
</url>`);
    });
  };

  // Add static paths
  staticRoutes.forEach((route) => {
    pushUrlBlock(route);
  });

  // Add product pages (using slugification system)
  if (products?.items) {
    products.items.forEach((item) => {
      // @ts-ignore - slug may not exist in types yet
      const slug = item.fields.slug ?? slugify(item.fields.name);
      pushUrlBlock(`/products/${slug}`, new Date(item.sys.updatedAt).toISOString());
    });
  }

  // Add gallery pages (using slugification system)
  if (gallery?.items) {
    gallery.items.forEach((item) => {
      // @ts-ignore
      const slug = item.fields.slug ?? slugify(item.fields.title);
      pushUrlBlock(`/gallery/${slug}`, new Date(item.sys.updatedAt).toISOString());
    });
  }

  // Add news pages (using slugification system)
  if (news?.items) {
    news.items.forEach((item) => {
      // @ts-ignore
      const slug = item.fields.slug ?? slugify(item.fields.title);
      pushUrlBlock(`/news-events/${slug}`, new Date(item.sys.updatedAt).toISOString());
    });
  }

  // Add about-us pages (using slugification system)
  if (aboutUs?.items) {
    aboutUs.items.forEach((item) => {
      // @ts-ignore
      const slug = item.fields.slug ?? slugify(item.fields.title);
      pushUrlBlock(`/about-us/${slug}`, new Date(item.sys.updatedAt).toISOString());
    });
  }

  // Construct standard sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${Array.from(urlEntries).join('\n')}

</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    }
  });
};

