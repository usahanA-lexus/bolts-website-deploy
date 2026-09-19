module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Big Shoulders Display"', "sans-serif"],
        sans: ['"Instrument Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#0A0A0B",
        paper: "#F4F2EE",
        red: {
          DEFAULT: "#D62B20",
          text: "#C8281D",
          "on-ink": "#FF4D3F",
        },
        muted: {
          paper: "#4A4A4F",
          ink: "#A3A3A8",
        },
        boltsRed: "#D62B20",
        boltsWhite: "#F4F2EE",
        boltsBlack: "#0A0A0B",
      },
    },
  },
  plugins: [],
};
