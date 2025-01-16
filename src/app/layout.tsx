import { absoluteUrl } from '@/lib/utils'
import { Metadata } from 'next'
import '../styles/index.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.danirolopes.com.br'),
  title: {
    default: 'Eco Chamber do Rolha',
    template: '%s | Rolha'
  },
  description: 'Coletânea de pensamentos e anotações do Rolha',
  openGraph: {
    title: 'Eco Chamber do Rolha',
    description: 'Coletânea de pensamentos e anotações do Rolha',
    url: absoluteUrl('/'),
    siteName: 'Eco Chamber do Rolha',
    images: [
      {
        url: absoluteUrl('/images/og-image.png'),
        width: 1800,
        height: 1600
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  icons: {
    icon: [{ url: '/favicon/favicon-32x32.png' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt=br">
      <body>{children}</body>
    </html>
  )
}
