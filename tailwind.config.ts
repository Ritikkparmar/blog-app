/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // 👈 enable dark mode class-based
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  