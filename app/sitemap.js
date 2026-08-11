export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://yourdomain.com';

  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/event',
    '/gallery',
    '/services',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}