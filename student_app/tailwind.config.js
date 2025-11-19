/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // "Hey, I want to use dark mode with a 'dark' class" -- so putting darkMode: "class"
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
