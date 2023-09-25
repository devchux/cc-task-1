/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dove-gray": "#666666",
        "wild-sand": "#F4F4F4",
        silver: "#CCCCCC",
        salem: "#087B2F",
        geyser: "#D4D9E4",
        "dusty-gray": "#979797",
        "medium-purple": "#9C4DE2",
        "silver-chalice": "#A0A0A0",
      },
    },
  },
  plugins: [],
};
