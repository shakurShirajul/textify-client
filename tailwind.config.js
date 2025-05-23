const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  plugins: [require("daisyui"), flowbite.plugin()],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      grotsk: ["Space Grotesk", "sans-serif"],
      martina: ["Martian Mono", "monospace"],
      newsreader: ["Newsreader", "serif"],
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
