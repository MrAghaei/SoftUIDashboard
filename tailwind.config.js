/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          dark: "#a01db5",
          light: "#ec068b",
          text:"#344767"
        },
        secondary:{
          outline: "#e9aede",
          text:"#68758f"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}