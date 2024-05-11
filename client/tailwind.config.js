// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00acb4",
        secondary: "#058187",
        customGray: "#4F6873",
        customBlue: "#A3B8C0",
        customLightBlue: "#DFF4FF",
        customDarkBlue: "#A8BCD8",
        customSideGray: "#354B46",
        customHover: "#C6D6D7",
        customPrimary: "#8799AA",
        customSecondary: "#4F6873",
      },
      backgroundImage: (theme) => ({
        gradient: "linear-gradient(to right, #8799AA, #4F6873)",
        // Adding another gradient
        gradient2: "linear-gradient(to bottom, #A3B8C0, #4F6873)",
      }),
      linearGradientColors: (theme) => ({
        "custom-primary-secondary": [
          theme("colors.customPrimary"),
          theme("colors.customSecondary"),
        ],
        "custom-secondary-primary": [
          theme("colors.customSecondary"),
          theme("colors.customPrimary"),
        ],
      }),
    },
  },
  plugins: [],
};
