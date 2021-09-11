module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        neongreen: "#52DEE5",
        text: "#C7D3FF",
        textdark: "#A1ABBF",
        bgblue: "#222E50",
        darkerblue: "#0A192F",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
      animation: {
        slide: "slide 50s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(-1500px, 0, 0)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
