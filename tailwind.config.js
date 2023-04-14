/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        h70: "70vh",
      },
      colors: {
        mainBg: "#F2F0EE",
        portfolio: "#48566E",
        mainBgDark: "#0E1017",
        primaryText: "#0f172a",
        darkText: "#939598",
        containerBg: "#ffffff",
        containerDark: "#18162C",
        borderDark: "#232140",
        inputBg: "#D4D5DB",
        darkBg: "#131127",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        show: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.3 },
        },
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1, zIndex: 0 },
        },
        type: {
          "0%": { width: "0ch" },
          "7%": { width: "1ch" },
          "14%": { width: "2ch" },
          "21%": { width: "3ch" },
          "28%": { width: "4ch" },
          "35%": { width: "5ch" },
          "42%": { width: "6ch" },
          "49%": { width: "7ch" },
          "56%": { width: "8ch" },
          "63%": { width: "9ch" },
          "70%": { width: "10ch" },
          "77%": { width: "11ch" },
          "84%": { width: "12ch" },
          "91%": { width: "13ch" },
          "98%": { width: "14ch" },
        },
      },
      animation: {
        fadeIn: "fade-in 1s ease-in-out forwards",
        show: "show 0.5s forwards",
        appear: "appear 0.5s forwards",
        type: "type 1.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
