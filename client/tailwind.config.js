/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "custom-3": "2fr 1fr 1fr",
        "custom-6": "1fr 1.5fr 1fr 1fr 1fr 0.5fr",
        "custom-order": "0.5fr 2fr 1fr 1fr 3fr 1fr",
        "custom-order-md": "1fr 2fr 1fr",
      },
      screens: {
        "max-sm": { max: "767px" }, // @media (max-width: 767px)
        "screen-md": { max: "900px"},
        "max-md": { max: "900px", min: "768px" }, // @media (max-width: 900px)
        "max-lg": { max: "1023px", min: "901px" }, // @media (max-width: 1023px)
        "max-xl": { max: "1279px", min: "1024px" }, // @media (max-width: 1279px)
        "max-2xl": { max: "1535px", min: "1280px" }, // @media (max-width: 1535px)
      },
      colors: {
        "custom-white": "#fff2ef",
        "custom-border": "#bdbdbd",
      },
      width: {
        "4/5": "80%",
        7.5: "7.5vw",
        70: "70px",
        30: "120px",
      },
      height: {
        "34vw": "34vw",
        "38vw": "38vw",
      },
      borderWidth: {
        5: "5px",
      },
      borderRadius: {
        50: "50%",
      },
      minHeight: {
        "60vh": "60vh",
      },
      maxWidth: {
        "1/2": "50%",
        "3/5": "60%",
        "9/20": "45%",
        "11/20": "55%",
      },
      gap: {
        "1.5vw": "1.5vw",
      },
      spacing: {
        "2vw": "2vw",
        "4vw": "4vw",
        "8vw": "8vw",
      },
      inset: {
        "1/10": "10%",
        "6vw": "6vw",
      },
      animation: {
        "fade-in": "fadeIn 3s",
        "fade-in-1s": "fadeIn 1s",
        "rotate-1s-in": "rotate 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        // loading xoay tron
        rotate: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
