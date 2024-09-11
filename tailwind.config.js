/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: {
                    primaryOne: '#2C3137',
                    primaryTwo: '#17191D',
                },
                secondaryColor: {
                    secondaryOne: '#EC540E',
                    secondaryTwo: '#D6361F'
                }
            },
            fontFamily: {
                primary: ['Bitsumishi', 'sans-serif']
            },
            keyframes: {
                spin: {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(360deg)'},
                },
            },
            animation: {
                spin: 'spin 20s linear infinite',
            },
        },
    },
    plugins: [],
}

