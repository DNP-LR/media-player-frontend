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
                secondaryColor:{
                    secondaryOne:'#EC540E',
                    secondaryTwo:'#D6361F'
                }
            },
            fontFamily:{
                primary :['Bitsumishi','sans-serif']
            }
        },
    },
    plugins: [],
}

