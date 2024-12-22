import { initFlowbite } from "flowbite";
import Flowbite from "flowbite-react/tailwind";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/flowbite/**/*.js",
     Flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
    Flowbite.plugin()
  ],
} satisfies Config;
