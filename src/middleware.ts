import { defineMiddleware } from "astro:middleware";
import { routes } from "./i18n/routes";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.url);
  const path = url.pathname;
  
  // Rewrite translated Italian paths internally to English structural paths
  for (const [enKey, translations] of Object.entries(routes)) {
    const itSection = (translations as any).it;
    
    // Match exactly /it/section or /it/section/something
    const regex = new RegExp(`^/it/${itSection}(/|$)`);
    
    if (regex.test(path)) {
      const newPath = path.replace(regex, `/it/${enKey}$1`) + url.search + url.hash;
      return context.rewrite(newPath);
    }
  }

  return next();
});
