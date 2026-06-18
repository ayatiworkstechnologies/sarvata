export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // Prevent crawling API routes
    },
    sitemap: "https://sarvata.org/sitemap.xml",
  };
}
