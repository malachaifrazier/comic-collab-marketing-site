import { Schema } from "astro/zod";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        // colors: {
        //   "blue": "#1fb6ff",
        //   "purple": "#7e5bef",
        //   "pink": "#ff49db",
        //   "orange": "#ff7849",
        //   "green": "#13ce66",
        //   "yellow": "#ffc82c",
        //   "gray-dark": "#273444",
        //   "gray": "#8492a6",
        //   "gray-light": "#d3dce6",
        // },
        // colorScheme: ["dark", "light"],
        // background: ["dark", "light"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
