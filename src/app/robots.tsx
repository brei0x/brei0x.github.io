import type { MetadataRoute } from 'next'

// GitHub Pages does not support server-side generation at runtime
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  }
}
