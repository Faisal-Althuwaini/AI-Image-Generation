/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        animation: {
            blob: "blob 3s infinite"
        },
        keyframes: {
            blob: {
                "0%": {
                    transform: "translate(0px,0px) scale(1)"
                },
                "33%": {
                    transform: "translate(30px,-50px) scale(1.2)"
                },
                "66%": {
                    transform: "translate(-20px,20px) scale(0.7)"
                },
                "100%": {
                    transform: "translate(0px,0px) scale(1)"
                },
            }
        }
      },
    },
    plugins: [],
  }