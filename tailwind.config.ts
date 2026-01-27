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
        // ============================================
        // IEEE × inApp - Brand Core Colors
        // ============================================
        brand: {
          red: {
            500: '#E53935', // Primary actions, CTAs, active states
            600: '#D32F2F', // Hover/active states
          },
          orange: {
            500: '#F4511E', // Supporting accent (gradients only)
          },
        },
        primary: '#b12529', // Adding primary alias for valid bg-primary usage

        // ============================================
        // Neutral System (Carries 80% of UI)
        // ============================================
        neutral: {
          0: '#050505',    // Main page background
          50: '#121212',   // Alternate sections, visual rhythm
          100: '#1A1A1A',  // Cards, FAQ panels, schedule blocks
        },

        // ============================================
        // Text Hierarchy
        // ============================================
        text: {
          primary: '#FFFFFF',   // Headings H1-H4
          secondary: '#D1D5DB', // Body paragraphs
          muted: '#9CA3AF',     // Dates, locations, helper text
        },

        // ============================================
        // Borders & Interactive States
        // ============================================
        border: {
          default: '#262626',  // Cards, inputs, dividers
          active: '#E53935',   // Focus states, active inputs
        },

        // ============================================
        // Links
        // ============================================
        link: {
          default: '#E53935',
          hover: '#D32F2F',
        },

        // ============================================
        // Status & Feedback (Functional Only)
        // ============================================
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#DC2626',

        // ============================================
        // Glass Surface
        // ============================================
        glass: {
          bg: 'rgba(255, 255, 255, 0.75)',
          border: 'rgba(255, 255, 255, 0.4)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Source Sans 3', 'DM Sans', 'Roboto', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Source Sans 3', 'DM Sans', 'sans-serif'],
      },
      borderRadius: {
        'card': '8px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
      },
    },
  },
  plugins: [],
};
export default config;
