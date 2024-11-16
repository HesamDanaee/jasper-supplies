import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: "hsl(var(--tertiary))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        gray: {
          DEFAULT: "hsl(var(--gray))",
          foreground: "hsl(var(--gray-foreground))",
        },
        seasalt: {
          DEFAULT: "hsl(var(--seasalt))",
          foreground: "hsl(var(--seasalt-foreground))",
        },
        snow: {
          DEFAULT: "hsl(var(--snow))",
          foreground: "hsl(var(--snow-foreground))",
        },
        smoke: {
          DEFAULT: "hsl(var(--smoke))",
          foreground: "hsl(var(--smoke-foreground))",
        },
        silver: {
          DEFAULT: "hsl(var(--silver))",
          foreground: "hsl(var(--silver-foreground))",
        },
        "french-gray": {
          DEFAULT: "hsl(var(--french-gray))",
          foreground: "hsl(var(--french-gray-foreground))",
        },

        babypowder: {
          DEFAULT: "hsl(var(--babypowder))",
        },
        sea: {
          DEFAULT: "hsl(var(--sea))",
        },
        nuts: {
          DEFAULT: "hsl(var(--nuts))",
        },
        honey: {
          DEFAULT: "hsl(var(--honey))",
        },
        herbs: {
          DEFAULT: "hsl(var(--herbs))",
        },
        animal: {
          DEFAULT: "hsl(var(--animal))",
        },
        biscuits: {
          DEFAULT: "hsl(var(--biscuits))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "circle-in-center": {
          "0%": { clipPath: "circle(0%)" },
          "100%": { clipPath: "circle(125%)" },
        },
      },
      animation: {
        "circle-in-center":
          "circle-in-center 2.5s cubic-bezier(.25, 1, .30, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
