export default function sitemap() {
  return [
    {
      url: 'https://theindiawatch.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add additional routes here if you add more pages in the future
    // {
    //   url: 'https://theindiawatch.com/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
