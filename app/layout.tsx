import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE } from '../data/site';

export const metadata: Metadata = {
  title: {
    default: 'TinyHomeInsurance.co.nz — Specialist Insurance for Tiny Homes in NZ',
    template: '%s | TinyHomeInsurance.co.nz',
  },
  description: 'Specialist insurance for tiny homes, tiny houses on wheels (THOW), container homes, and off-grid dwellings in New Zealand. NZ-licensed advisers match you with the right cover within one business day.',
  metadataBase: new URL('https://www.tinyhomeinsurance.co.nz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'TinyHomeInsurance.co.nz',
    type: 'website',
    locale: 'en_NZ',
    url: 'https://www.tinyhomeinsurance.co.nz',
    title: 'TinyHomeInsurance.co.nz — Specialist Insurance for Tiny Homes in NZ',
    description: 'Specialist insurance for tiny homes, THOWs, container homes, and off-grid dwellings in New Zealand. NZ-licensed advisers, free quote matching.',
    images: [
      {
        url: '/images/tinyhome_insurance_2.jpg',
        width: 1200,
        height: 630,
        alt: 'Tiny home on wheels in New Zealand — TinyHomeInsurance.co.nz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TinyHomeInsurance.co.nz — Specialist Tiny Home Insurance NZ',
    description: 'Specialist insurance for tiny homes, THOWs, container homes, and off-grid dwellings in New Zealand.',
    images: ['/images/tinyhome_insurance_2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'tiny home insurance NZ',
    'THOW insurance New Zealand',
    'tiny house on wheels insurance',
    'container home insurance NZ',
    'off-grid home insurance',
    'tiny home insurance cost NZ',
    'specialist tiny home insurance',
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.domain,
  logo: `${SITE.domain}/favicon.ico`,
  contactPoint: {
    '@type': 'ContactPoint',
    email: SITE.email,
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'NZ',
  },
  sameAs: [],
  description: 'Specialist tiny home insurance referral service in New Zealand. We connect tiny home owners with NZ-licensed insurance advisers who specialise in THOWs, container homes, and off-grid dwellings.',
  areaServed: {
    '@type': 'Country',
    name: 'New Zealand',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.domain,
  description: 'Specialist insurance for tiny homes in New Zealand',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE.domain}/blog/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <body className="font-sans bg-stone-50 text-stone-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
