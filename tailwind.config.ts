/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#00d4b8",

        orange: "#ff6b35",

        lavender: "#b8a9f0",

        "off-white": "#f0f0f8",

        muted: "#5a5a78",

        bg: "#080810",

        "bg-2": "#0f0f1a",

        "bg-3": "#141428",
      },

      fontFamily: {
        display: ["Syne", "sans-serif"],

        body: ["DM Sans", "sans-serif"],

        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "grad-shift": "gradShift 6s ease infinite",

        "fade-up": "fadeUp 0.8s ease forwards",

        blink: "blink 2s ease-in-out infinite",

        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
      },

      keyframes: {
        gradShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },

          "50%": { backgroundPosition: "100% 50%" },
        },

        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },

          to: { opacity: "1", transform: "translateY(0)" },
        },

        blink: {
          "0%, 100%": { opacity: "1" },

          "50%": { opacity: "0.3" },
        },

        scrollPulse: {
          "0%, 100%": { opacity: "0.3" },

          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
