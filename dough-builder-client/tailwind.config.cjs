/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/daisyui/dist/**/*.js',
        'node_modules/react-daisyui/dist/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                red: '#8C001D'
            },
        },
    },
    daisyui: {
        themes: [ ,
            {
                bread: {
                    "primary": "#8C001D",

                    "secondary": "#7B92B2",

                    "accent": "#67CBA0",

                    "neutral": "#181A2A",

                    "base-100": "#FFFFFF",

                    "info": "#3ABFF8",

                    "success": "#36D399",

                    "warning": "#FBBD23",

                    "error": "#F87272",
                },
            },
        ],
    },
    plugins: [
        require("daisyui"),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
    ],
}
