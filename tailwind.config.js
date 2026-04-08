/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        body: ["'Barlow'", "sans-serif"],
      },
      colors: {
        accent: "#E8FF00",
        dark: "#0a0a0a",
        mid: "#161616",
        light: "#f0f0f0",
      },
      animation: {
        "slide-up": "slideUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        slideUp: {
          from: { opacity: 0, transform: "translateY(60px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
