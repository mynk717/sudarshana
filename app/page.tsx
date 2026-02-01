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
    "industrial roofing solutions Chhattisgarh"
  ],
  openGraph: {
    title: "Sudarshana Profile Sheets - Premium Metal Roofing Solutions",
    description: "Leading manufacturer of metal profile sheets in Raipur. 500+ projects, 15+ years warranty.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://sudarshanaprofile.com",
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <FAQ />
      <Contact />
    </>
  );
}
