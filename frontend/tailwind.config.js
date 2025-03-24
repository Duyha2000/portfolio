/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,

      padding: "1rem",

      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    fontFamily: {
      inter: ["Inter"],
    },

    extend: {
      colors: {
        primary: {
          25: "#fef7ee",
          40: "#fcf2e5",
          50: "#E3F2EF",
          100: "#B9DFD7",
          200: "#8FCBBE",
          300: "#68B5A5",
          400: "#52A593", // Primary
          500: "#469582",
          600: "#aa4f07",
          700: "#7a3704",
          800: "#4a2100",
          900: "#1e0800",
        },
        second: {
          50: "#FBE9E7",
          100: "#FECCBC",
          200: "#FEAA91",
          300: "#FD8965",
          400: "#FD6F43", // Second
          500: "#FD6F43",
        },
      },
    },
  },
};
