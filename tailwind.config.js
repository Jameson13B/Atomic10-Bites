/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      starky: "#E3D8C1",
      hippie: "#C65368",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        PlusJakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
