/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans Variable", "sans-serif"],
        PTSans: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
