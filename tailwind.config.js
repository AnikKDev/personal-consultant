module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1D1D1D",

          "secondary": "#FCCB06",

          "accent": "#5E5E5E",

          "neutral": "#3E3E3E",

          "base-100": "#fff",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}