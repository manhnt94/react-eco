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
        "0010": "0 0 10%",
        "0020": "0 0 20%",
        "0025": "0 0 25%",
        "0030": "0 0 30%",
        "0035": "0 0 35%",
        "0050": "0 0 50%",
        "0070": "0 0 70%",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      display: ['group-hover', 'group-focus'],
    },
  },
  plugins: [],
};
