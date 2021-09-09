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
        darkblue: "#0F223E",
        bgblue: "#222E50",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
