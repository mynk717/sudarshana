import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Products from "./components/sections/Products";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sudarshana Profile Sheets - Metal Roofing Solutions Raipur",
  description: "Leading manufacturer of custom trapezoidal color-coated metal profile sheets in Raipur, Chhattisgarh. 15+ years warranty, 500+ projects completed. Premium shed construction services.",
  keywords: [
    "metal profile sheets Raipur",
    "color coated roofing Chhattisgarh",
    "trapezoidal sheets manufacturer",
    "shed construction Raipur",
    "industrial roofing solutions Chhattisgarh",
    "galvanized steel sheets",
    "aluminum zinc coating AZ-70 AZ-150",
    "weather resistant roofing"
  ],
  openGraph: {
    title: "Sudarshana Profile Sheets - Premium Metal Roofing Solutions",
    description: "Leading manufacturer of metal profile sheets in Raipur. 500+ projects, 15+ years warranty.",
    type: "website",
    locale: "en_IN",
    url: "https://sudarshanaprofile.com",
    siteName: "Sudarshana Profile Sheets",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&h=630&q=80&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Sudarshana Profile Sheets - Metal Roofing Manufacturing"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudarshana Profile Sheets - Premium Metal Roofing Solutions",
    description: "Leading manufacturer of metal profile sheets in Raipur. 15+ years warranty.",
    images: ["https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&h=630&q=80&auto=format&fit=crop"],
  },
  alternates: {
    canonical: "https://sudarshanaprofile.com",
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
    },
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Products />
      <FAQ />
      <Contact />
    </div>
  );
}
