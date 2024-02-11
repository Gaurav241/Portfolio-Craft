import { Analytics } from '@vercel/analytics/react'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { BackToTop } from './components/back-to-top'
import { ContactForm } from './components/contact-form'
import { Header } from './components/header'
import { Toaster } from './components/toaster'
import './globals.css'

export const metadata = {
  title: {
    default: 'KGG Dev',
    template: '%s | KGG Dev',
  },
  authors: [
    { name: 'Kumar Gaurav Govinda', url: 'https://www.linkedin.com/in/krgauravgovinda/' },
  ],
  creator: 'Kumar Gaurav Govinda',
  icons: '/favicon.ico',
  openGraph: {
    title: 'KGG Dev',
    description:
      'Kumar Gaurav Govinda DEV, website and web application development.',
    type: 'website',
    locale: 'en_US',
    url: 'xyz.com',
  },
  applicationName: 'KGG Dev',
  description:
    'Kumar Gaurav Govinda DEV, website and web application development.',
  category: 'Web Development',
  keywords:
    'Web Development, Website Development, Application Development, Web Application Development, Website Development, Website Development in Ranchi, Application Development in Ranchi, Web Application Development in Ranchi, Website Development in Ranchi, Website Development in India, Application Development in India, Web Application Development in India, Web Site Development in India, Website Development in Ranchi India, Application Development in Ranchi India, Web Application Development in Ranchi India, Website Development in Ranchi India, Website Development in India, Application Development in India, Web Application Development in India, Website Development in India, Website Development in Ranchi India, Application Development in Ranchi India, Web Application Development in Ranchi India, Web Site Development in Ranchi India',
  classification: 'Web Development',
  robots: 'index, follow',
  publisher: 'KGG Dev',
  referrer: 'no-referrer-when-downgrade',
  alternates: {
    canonical: 'xyz.com',
    languages: {
      'en-US': 'xyz.com',
    },
  },
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />
        <Header />
        {children}
        <ContactForm />
        <Analytics />
      </body>
    </html>
  )
}
