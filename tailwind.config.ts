import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07142f",
        navy: "#0d1f4d",
        cobalt: "#1987ff",
        cyan: "#4dc9ff",
        gold: "#f59f0b",
        mist: "#ebf4ff",
        line: "rgba(12, 31, 77, 0.12)"
      },
      boxShadow: {
        glow: "0 18px 60px rgba(25, 135, 255, 0.24)",
        card: "0 24px 60px rgba(7, 20, 47, 0.08)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(25, 135, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(25, 135, 255, 0.08) 1px, transparent 1px)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 3.6s ease-in-out infinite",
        shine: "shine 7s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55", transform: "scale(0.98)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
