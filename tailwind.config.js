/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pure-white": "rgba(255, 255, 255, 1)",
        "cream-bg": "rgba(242, 234, 226, 1)",
        "aurometal-saurus": "rgba(108, 114, 137, 1)",
        "deep-aquamarine": "rgba(61, 129, 104, 1)",
        "deep-aquamarine-hover": "rgba(26, 64, 50, 1)",
        gunmetal: "rgba(28, 35, 43, 1)",
      },
      fontFamily: {
        fraunces: "Fraunces",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
