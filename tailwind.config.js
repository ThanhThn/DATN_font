/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./ui/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mineShaft: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#2a2a2a",
        },
        white: {
          50: "#fdfdfd",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        lime: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314",
          950: "#1a2e05",
        },
      },
      fontFamily: {
        BeVietnamBold: "BeVietnamProBold",
        BeVietnamRegular: "BeVietnamProRegular",
        BeVietnamSemiBold: "BeVietnamProSemiBold",
        BeVietnamMedium: "BeVietnamProMedium",
      },
      borderWidth: {
        1: 1,
        1.5: "1.5",
      },
      fontSize: {
        8: "8",
        10: "10",
        12: "12",
        14: "14",
        16: "16",
        18: "18",
        20: "20",
        30: ["30", "2.6rem"],
      },
      spacing: {
        10: "10",
        12: "12",
        14: 14,
      },
    },
  },
  plugins: [],
};
