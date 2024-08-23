/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "IranYekan": ['IranYekan']
            }
        },
        colors: {
            black: '#000',
            red: '#DC143CFF',
            white: '#fff',
            bgBlack: '#030303',
            lightgray: '#D3D3D3FF',
            transparent: 'transparent'
        },
        screens: {
            '2xl': {'max': '1535px'},
            // => @media (max-width: 1535px) { ... }

            'xl': {'max': '1279px'},
            // => @media (max-width: 1279px) { ... }

            'lg': {'max': '1023px'},
            // => @media (max-width: 1023px) { ... }

            'md': {'max': '767px'},
            // => @media (max-width: 767px) { ... }

            'sm': {'max': '639px'},
            // => @media (max-width: 639px) { ... }
        }
    },
    plugins: [],
}

