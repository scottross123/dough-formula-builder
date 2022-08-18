/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                red: '#8C001D'
            },
        },
    },
    daisyui: {
        themes: ["corporate"],
    },
    plugins: [
        require("daisyui"),
        require('@tailwindcss/typography'),
    ],
}
