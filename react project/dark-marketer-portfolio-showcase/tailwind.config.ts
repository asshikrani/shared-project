
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#00cfff",
          dark: "#005f73",
          foreground: "#000000",
        },
        background: "#121212",
        foreground: "#eeeeee",
        darkgray: "#1e1e1e",
        accent: "#00ccff",
        socialBlue: "#1DA1F2",
        socialLinkedin: "#2867B2",
        socialInsta: "#C13584",
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      boxShadow: {
        neon: "0 0 8px 2px #00cfff80, 0 0 20px 6px #00cfff40",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

