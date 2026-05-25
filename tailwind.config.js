/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
      colors: {
        navy: {
          50: "#eef4fb", 100: "#d4e2f4", 200: "#a9c5e9",
          300: "#6f9ed6", 400: "#3d72b8", 500: "#1e4f8f",
          600: "#163d72", 700: "#0f2d57", 800: "#0a2142", 900: "#061528", 950: "#030b16",
        },
        aqua: {
          50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc",
          300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4",
          600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63",
        },
      },
      keyframes: {
        wave: {
          "0%,100%": { transform: "translateX(0) translateZ(0) scaleY(1)" },
          "50%": { transform: "translateX(-25%) translateZ(0) scaleY(0.85)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        wave: "wave 7s cubic-bezier(0.36,0.45,0.63,0.53) infinite",
        "wave-slow": "wave 12s cubic-bezier(0.36,0.45,0.63,0.53) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};
