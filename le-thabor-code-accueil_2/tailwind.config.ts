import type { Config } from "tailwindcss";

// Configuration Tailwind — tokens de design "Le Thabor"
// Toutes les couleurs/typos du site DOIVENT passer par ces tokens
// (jamais de couleur "en dur" dans les composants) pour rester cohérent
// et facilement modifiable depuis un seul endroit.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: "#E91E63", // couleur primaire de la marque
          deep: "#AD1457",    // hover / texte accentué
          blush: "#FDE7EF",   // fonds très clairs, badges
        },
        ivory: "#FBF8F6",     // fond alternatif (plus chaud que le blanc pur)
        ink: "#2B2320",       // texte principal (noir chaud, pas #000)
        stone: "#A79C97",     // texte secondaire / légendes
        line: "#EDE6E2",      // séparateurs, bordures discrètes
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        "4xl": "28px",
      },
      boxShadow: {
        soft: "0 20px 60px -24px rgba(233,30,99,0.28)",
        "soft-sm": "0 10px 30px -14px rgba(43,35,32,0.15)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
