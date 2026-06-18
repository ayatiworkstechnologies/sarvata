export default function sitemap() {
  const baseUrl = "https://sarvata.org";

  // Define all the routes in the application
  const routes = [
    "",
    "/about-us",
    "/contact-us",
    "/event",
    "/services",
    "/services/for-educators",
    "/services/for-educators/free-resources-tools",
    "/services/for-educators/teacher-mentoring",
    "/services/for-educators/workshops-training",
    "/services/for-leaders",
    "/services/for-leaders/faculty-leadership-mentoring",
    "/services/for-leaders/inclusion-audits-roadmaps",
    "/services/for-leaders/strategic-planning-systems",
    "/services/for-leaders/student-programs",
    "/services/for-leaders/student-programs/cyber-safety-digital-citizenship",
    "/services/for-leaders/student-programs/healthy-relationships-boundaries",
    "/services/for-leaders/student-programs/mental-health-well-being",
    "/services/for-parents",
    "/services/for-parents/for-your-child",
    "/services/for-parents/for-your-child/understanding-how-your-child-learns",
    "/services/for-parents/insights-guidance",
    "/services/for-parents/parent-workshops",
    "/services/for-parents/school-partnership-advocacy",
  ];

  const sitemapRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return sitemapRoutes;
}
