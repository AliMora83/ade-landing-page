/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        dark_gradient:
          "linear-gradient(to right, #0D0D0D, #1c1d25, #0D0D0D)",
        dark_gradient_btn:
          "linear-gradient(to right, #352b23, #95775c, #352b23)",
      },
      colors: {
        gray: {
          100: "#EBF1F5",
          200: "#D9E3EA",
          300: "#C5D2DC",
          400: "#9BA9B4",
          500: "#707D86",
          600: "#55595F",
          700: "#33363A",
          800: "#25282C",
          900: "#151719",
        },
        purple: {
          100: "#FF8400",
          200: "#bf451c",
          300: "#a93d18",
          400: "#923515",
          500: "#7c2d12",
          600: "#7C2D12",
          700: "#66250f",
          800: "#4f1d0c",
          900: "#391508",
          950: "#230d05",
        },
        Brown: {
          100: "#FFD966",
          200: "#95775c",
          300: "#352b23",
        },
        Dark: {
          100: "#455073",
          200: "#2e364d",
          300: "#a93d18",
          400: "#923515",
          500: "#7c2d12",
          600: "#7C2D12",
          700: "#66250f",
          800: "#042b50",
          900: "#02213b",
          950: "#001C30",
        },
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      fontFamily: {
        inter: [
          "var(--font-inter)",
          "sans-serif",
        ],
        "architects-daughter": [
          "var(--font-architects-daughter)",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
        "6xl": "4rem",
      },
      inset: {
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      minWidth: {
        10: "2.5rem",
      },
      scale: {
        98: ".98",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
