/** @type {import('tailwindcss').Config} */
module.exports = {
  // Make sure all files with NativeWind classes are included
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",       // if you use expo-router
    "./src/**/*.{js,jsx,ts,tsx}",       // screens, components, etc.
    "./components/**/*.{js,jsx,ts,tsx}" // if you also have a root components folder
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {}
  },
  plugins: []
}