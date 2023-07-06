/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF324D",
        secondary: "#fa324d33",
        secondary_dark: "#292b2c",
        secondary_light: "#343a40",
        grey: "#687188",
        black: "#202325",
        green: "#388e3c",
        gold: "#F6BC3E",
        testimonials: "#FFF1F1",
      },
      fontFamily: {
        poppins: ["Poppins", "Roboto", "Arial", "Helvetica"],
        roboto: ["Roboto", "Poppins", "Arial", "Helvetica"],
      },
    },
  },
  plugins: [],
};
