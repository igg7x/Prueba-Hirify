/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right,  #187DCA, #26e4c7 )",
      },

      fontFamily: { openSans: ["Open Sans", "sans-serif"] },
      fontSize: {
        banner: "50px",
        h1: "40px",
        title: "36px",
        releses: "25px",
        descAndchips: "14px",
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        regular: 400,
      },
    },
  },
  plugins: [],
};
