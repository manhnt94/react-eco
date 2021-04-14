module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        header: "#232f3e",
      }),
      flex: {
        "0035": "0 0 35%",
        "0025": "0 0 25%",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
