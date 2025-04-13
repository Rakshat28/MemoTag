// tailwind.config.js
import flowbite from 'flowbite/plugin'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      maskImage: {
        fadeX: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
      },
    },
  },
  plugins: [
    flowbite,
    forms,
    ({ addUtilities }) => {
      addUtilities({
        '.mask-fade-x': {
          maskImage: 'linear-gradient(to right, transparent, black 0%, black 100%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        },
      });
    },
  ],
}

export default config