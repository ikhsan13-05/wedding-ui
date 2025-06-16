/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ["Sacramento", "cursive"],
        dancingscript: ["Dancing Script", "cursive"],
        greatVibes: ["Great Vibes", "cursive"],
        playfair: ["Playfair Display", "serif"],
        audiowide: ["Audiowide", "sans-serif"],
        meaculpa: ["Mea Culpa", "cursive"],
        merienda: ["Merienda", "cursive"],
        lora: ["Lora", "serif"],
      },
      keyframes: {
        "grow-x": {
          "0%": { width: "0" },
          "100%": { width: "6rem" },
        },
        zoomSlow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" }, // Zoom pelan 10%
        },
      },
      animation: {
        zoomSlow: 'zoomSlow 20s ease-in-out infinite',
      },
      colors: {},
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
