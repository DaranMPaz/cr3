import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CR3 Auditoria',
    short_name: 'CR3',
    description: 'Auditoria de terceira parte para sistemas de logística reversa',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    categories: ["Audit", "Compliance", "Assurance"],
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}