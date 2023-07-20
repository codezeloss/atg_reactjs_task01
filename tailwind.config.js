/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
      },
      fontFamily: {
        "plex-sans": ["IBM Plex Sans", "sans-serif"],
      },
      screens: {
        "1bp": { max: "1300px" },
        "2bp": { max: "1034px" },
        "3bp": { max: "720px" },
        "4bp": { max: "672px" },
        "5bp": { max: "590px" },
        "6bp": { max: "406px" },
      },
    },
  },
  plugins: [],
};
