import type { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


  return [
    {
        url: 'https://walid-siala.com/',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    },
    {
        url: 'https://walid-siala.com/projects',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: 'https://walid-siala.com/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
  ]
}