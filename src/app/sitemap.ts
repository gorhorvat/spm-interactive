export default function sitemap() {
  const baseUrl = 'https://fractalbyte.studio';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
