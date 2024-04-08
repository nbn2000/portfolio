export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-primary)",
        grey: "var(--color-grey)",
      },
      textColor: {
        primary: "var(--color-primary)",
        grey: "var(--color-grey)",
      },
    },
  },
  plugins: [],
};
