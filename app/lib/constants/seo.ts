import { Metadata } from 'next';

export const siteConfig = {
  name: 'Sudarshana Profile Sheets',
  description: 'Leading manufacturer of custom trapezoidal color-coated metal profile sheets and shed solutions in Raipur, Chhattisgarh. 15+ years warranty, 500+ projects completed.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sudarshanaprofile.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'metal profile sheets Raipur',
    'color coated roofing Chhattisgarh',
    'trapezoidal sheets manufacturer',
    'shed construction Raipur',
    'industrial roofing solutions',
    'custom metal sheets India'
  ]
};

export const defaultMetadata: Metadata = {
  title: {
    default: 'Sudarshana Profile Sheets - Metal Roofing Solutions Raipur',
    template: '%s | Sudarshana Profile Sheets'
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Sudarshana Profile Sheets' }],
  creator: 'Sudarshana Profile Sheets',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: 'Sudarshana Profile Sheets - Metal Roofing Solutions'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'your-google-verification-code',
  }
};
