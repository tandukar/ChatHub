/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                30: "23rem",
                85: "27rem",
                100: "29rem",
                150: "48rem",
                200: "69rem",
                250: "100rem",
            },
            height: {
                329: "25rem",
                150: "48rem",
            },
            colors: {
                'dc1': "#7289da",
                'dc2': "#23271a",
                'dc3': "#343232",
                'dc4': "#23272a",
            },
        },
    },
    plugins: [],
};