/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/preline/dist/*.js,"],
  theme: {
    extend: {
      animation: {
        "wobble-hor-bottom": "wobble-hor-bottom 0.8s ease   both",
      },
      keyframes: {
        "wobble-hor-bottom": {
          "0%,to": {
            transform: "translateX(0%)",
            "transform-origin": "50% 50%",
          },
          "15%": {
            transform: "translateX(-10px) rotate(-6deg)",
          },
          "30%": {
            transform: "translateX(8px) rotate(6deg)",
          },
          "45%": {
            transform: "translateX(-6px) rotate(-3.6deg)",
          },
          "60%": {
            transform: "translateX(4px) rotate(2.4deg)",
          },
          "75%": {
            transform: "translateX(-2px) rotate(-1.2deg)",
          },
        },
      },
    },
  },
  plugins: [require("preline/plugin")],
};
