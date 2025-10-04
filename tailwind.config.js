/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          base: "#0e0f13",     // black background
          card: "#161823",     // dark gray for cards
          accent: "#ff4ecd",   // bright pink accent
          accent2: "#b26bff",  // violet secondary
          line: "#24283b",     // border line
        },
        boxShadow: {
          glow: "0 0 40px rgba(255,78,205,0.35)",
        },
      },
    },
    plugins: [],
  }