import { products } from '../constants/content';

export const generateProductSchema = (product: typeof products[0]) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  category: product.category,
  brand: {
    "@type": "Brand",
    name: "Sudarshana Profile Sheets"
  },
  manufacturer: {
    "@type": "Organization",
    name: "Sudarshana Profile Sheets"
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR"
    }
  }
});

export const faqSchema = (faqs: Array<{question: string; answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});
