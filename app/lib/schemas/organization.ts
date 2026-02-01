import { businessInfo } from '../constants/content';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/#organization`,
  name: businessInfo.name,
  alternateName: "Sudarshana Profile",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
  description: "Leading manufacturer of custom trapezoidal color-coated metal profile sheets and shed solutions in Raipur, Chhattisgarh",
  foundingDate: businessInfo.establishedYear,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Raipur",
    addressRegion: "Chhattisgarh",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "21.2514",
    longitude: "81.6296"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: businessInfo.phone,
    email: businessInfo.email,
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"]
  },
  areaServed: {
    "@type": "State",
    name: "Chhattisgarh"
  },
  sameAs: [
    "https://www.facebook.com/sudarshanaprofile",
    "https://www.instagram.com/sudarshanaprofile"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/#localbusiness`,
  name: businessInfo.name,
  image: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.address,
    addressLocality: "Raipur",
    addressRegion: "Chhattisgarh",
    postalCode: "492001",
    addressCountry: "IN"
  },
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00"
    }
  ]
};
