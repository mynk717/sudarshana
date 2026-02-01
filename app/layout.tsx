import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "./lib/constants/seo";
import { organizationSchema, localBusinessSchema } from "./lib/schemas/organization";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Modern, professional fonts for industrial B2B
const manrope = Manrope({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"]
});

const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap", 
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
