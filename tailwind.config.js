/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E22",
      },
    },
    fontSize: {
      xxs: "0.6rem",
      xs: "0.7rem",
      "sm": '0.8rem',
      "base": '1rem',
      "xl": '1.25rem',
      "2xl": '1.563rem',
      "3xl": '1.953rem',
      "4xl": '2.441rem',
      "5xl": '3.052rem',
    }
  },
  plugins: [],
};
