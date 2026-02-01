import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        'mobile-h1': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'mobile-h2': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'desktop-h1': ['3.5rem', { lineHeight: '4rem', fontWeight: '700' }],
        'desktop-h2': ['2.125rem', { lineHeight: '2.75rem', fontWeight: '600' }],
      },
      colors: {
        industrial: {
          blue: '#1e40af',
          steel: '#64748b',
          orange: '#f97316',
        }
      }
    },
  },
  plugins: [],
};
export default config;
