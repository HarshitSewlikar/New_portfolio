/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Sleek black / dark mode base
        base: {
          bg: "#08090C",          // deep black
          surface: "#0F1118",     // dark surface
          elevated: "#151824",    // dark card background
          border: "#262C3E",      // subtle border
          line: "#1D2230",
          ink: "#F4F5F8",         // crisp bright text
          "ink-soft": "#9EA6B8",  // soft readable text
          "ink-mute": "#687185",  // muted labels
        },
        // Blue + Yellow + Pink — vibrant dark pop accents
        accent: {
          // vibrant blue
          blue: "#2F6BFF",
          "blue-deep": "#5C8FFF",
          "blue-soft": "#7AA0FF",
          "blue-tint": "rgba(47, 107, 255, 0.15)",
          // butter yellow
          yellow: "#FFD93D",
          "yellow-deep": "#FFE066",
          "yellow-soft": "#FFE889",
          "yellow-tint": "rgba(255, 217, 61, 0.15)",
          // cotton candy pink
          pink: "#FF8DAF",
          "pink-deep": "#FFA8C2",
          "pink-tint": "rgba(255, 141, 175, 0.15)",
          // soft mint highlight
          mint: "#A8E6CF",
          "mint-tint": "rgba(168, 230, 207, 0.15)",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Inter'", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "'Inter'", "system-ui", "sans-serif"],
        serif: ["'Newsreader'", "Georgia", "'Times New Roman'", "serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        // handwriting feel for sticker accents
        hand: ["'Caveat'", "'Plus Jakarta Sans'", "cursive"],
      },
      boxShadow: {
        // soft glow shadow
        soft: "0 10px 30px -10px rgba(47, 107, 255, 0.25)",
        // chunky pop sticker shadow for dark mode
        pop: "5px 5px 0 0 #000000",
        "pop-blue": "5px 5px 0 0 #2F6BFF",
        "pop-yellow": "5px 5px 0 0 #FFD93D",
        "pop-pink": "5px 5px 0 0 #FF8DAF",
        glow: "0 0 40px -8px rgba(47, 107, 255, 0.45)",
        glowYellow: "0 0 40px -8px rgba(255, 217, 61, 0.45)",
        glowPink: "0 0 40px -8px rgba(255, 141, 175, 0.45)",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(rgba(26,34,56,0.05) 1px, transparent 1px)",
        "dotted-blue":
          "radial-gradient(rgba(47,107,255,0.18) 1.4px, transparent 1.4px)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        wobble: "wobble 1.4s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "spin-slow": "spin 22s linear infinite",
        marquee: "marquee 30s linear infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        "pop-in": "popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        wiggle: "wiggle 1.6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1.5deg)" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
}
