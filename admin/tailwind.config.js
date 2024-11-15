/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "custom-5": "0.5fr 2fr 1fr 1fr 0.5fr",
        "custom-order": "0.5fr 2fr 1fr 1fr 1fr",
        "custom-order-lg": "0.5fr 2fr 1fr",
        "custom-3": "1fr 3fr 1fr",
      },
      screens: {
        "max-lg": { max: "1000px" }, // @media (max-width: 1000px)
        "max-sm": { max: "600px" }, // @media (max-width: 600px)
        "max-md": { max: "900px" }, // @media (max-width: 900px)
      },
      maxWidth: {
        30: "120px",
      },
      width: {
        "7/10": "70%",
        30: "120px",
        "custom-max-40": "max(40%,280px)",
      },
      borderRadius: {
        "custom-1": "3px 0px 0px 3px",
      },
      colors: {
        "custom-gray": "#a9a9a9",
        "custom-gray-2": "#6d6d6d",
        "custom-text-order": "#505050",
        "custom-white": "#fff0ed",
        "custom-white-bg": "#ffe8e4",
        "custom-white-1": "#cacaca",
        "custom-white-2": "#f9f9f9",
      },
      spacing: {
        "4p": "4%",
        0.2: "25%",
      },
      borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
