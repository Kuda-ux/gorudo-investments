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
          50: "#f1faf2",
          100: "#def3e1",
          200: "#bee6c6",
          300: "#8fd1a0",
          400: "#5bb574",
          500: "#389a55",
          600: "#277c42",
          700: "#1f6236",
          800: "#1b4e2d",
          900: "#174027",
          950: "#0a2414",
        },
        cream: "#fbfaf6",
        ink: "#0f1a14",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(23, 64, 39, 0.15)",
        ring: "0 0 0 1px rgba(23, 64, 39, 0.08), 0 20px 40px -20px rgba(23, 64, 39, 0.25)",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(23,64,39,0.08) 1px, transparent 0)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 1s ease-out both",
        "float": "float 8s ease-in-out infinite",
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
      },
    },
  },
  plugins: [],
};
