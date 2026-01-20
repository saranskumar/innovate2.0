import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF8F3',
          dark: '#F5F2ED',
          darker: '#EBE7DF',
        },
        highlight: {
          DEFAULT: '#FFE066',
          soft: '#FFF4CC',
        },
        sketch: {
          DEFAULT: '#1A1A1A',
          gray: '#888888',
          border: '#D4CFC4',
        },
        text: {
          primary: '#2B2B2B',
          secondary: '#5A5A5A',
          light: '#888888',
        },
      },
      fontFamily: {
        handwritten: ['Caveat', 'cursive'],
        'handwritten-alt': ['Patrick Hand', 'cursive'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sketch': '12px',
      },
      boxShadow: {
        'paper': '0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.04)',
        'paper-hover': '0 4px 8px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.06)',
        'sketch': '3px 3px 0 #1A1A1A',
        'sketch-hover': '5px 5px 0 #1A1A1A',
      },
      rotate: {
        'slight-1': '-0.5deg',
        'slight-2': '0.5deg',
        'slight-3': '-0.8deg',
        'slight-4': '0.8deg',
      },
    },
  },
  plugins: [],
};
export default config;
