/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#437EF7",
        primarylight: "#6FA2FF",
        textprimary: "#272D37",
        textsecondary: "#5F6D7E ",
      },
    },
  },
  plugins: [],
};
