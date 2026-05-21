/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7f0",
          100: "#d6eddb",
          200: "#aed9bb",
          300: "#7bbf93",
          400: "#4da06b",
          500: "#2e8050",
          600: "#236640",
          700: "#1b5e35",
          800: "#164b2a",
          900: "#103820",
          950: "#071d10",
        },
        cream: "#fbfaf6",
        ink: "#0f1a14",
        lime: {
          400: "#a3e635",
          500: "#84cc16",
        },
        sun: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
        earth: {
          500: "#b45309",
          600: "#92400e",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(27, 94, 53, 0.15)",
        ring: "0 0 0 1px rgba(27, 94, 53, 0.08), 0 20px 40px -20px rgba(27, 94, 53, 0.25)",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(23,64,39,0.08) 1px, transparent 0)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 1s ease-out both",
        "float": "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "pulse-ring": "pulseRing 2.6s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow": "spin 14s linear infinite",
        "shimmer": "shimmer 3.5s linear infinite",
        "gradient": "gradient 10s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: 0.6 },
          "80%, 100%": { transform: "scale(1.6)", opacity: 0 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
