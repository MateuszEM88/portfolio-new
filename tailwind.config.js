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
        mainBgDark: "#0A192F",
        primaryText: "#0f172a",
        darkText: "#939598",
        containerBg: "#ffffff",
        containerDark: "#18162C",
        borderDark: "#232140",
        inputBg: "#D4D5DB",
        darkBg: "#131127",
        linkedin: "#0e76a8",
        github: "#6e5494",
        twitter: "#1DA1F2",
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
          "10%": { width: "1ch" },
          "20%": { width: "2ch" },
          "30%": { width: "3ch" },
          "40%": { width: "4ch" },
          "50%": { width: "5ch" },
          "60%": { width: "6ch" },
          "70%": { width: "7ch" },
          "80%": { width: "8ch" },
          "90%": { width: "9ch" },
          "100%": { width: "9.5ch" },
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
