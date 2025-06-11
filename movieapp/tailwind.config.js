/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",         // Screens & routes
    "./components/**/*.{js,jsx,ts,tsx}",  // Reusable components
  ],
  theme: {
    extend: {
      colors: {
        // Example: custom color extension
        primary: "#1E40AF",   // Tailwind blue-800
        secondary: "#F59E0B", // Tailwind amber-500
      },
    },
  },
  plugins: [] // 👈 Required for NativeWind
};
