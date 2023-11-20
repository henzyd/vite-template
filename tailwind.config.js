/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smallMobile: { max: "320px" },
        // => @media (max-width: 320px) { ... }

        mediumMobile: { max: "375px" },
        // => @media (max-width: 375px) { ... }

        largeMobile: { max: "425px" },
        // => @media (max-width: 425px) { ... }

        tablet: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        tabletAndBelow: { max: "1024px" },
        // => @media (max-width:1024px) { ... }

        laptopAndAbove: { min: "1024px" },
        // => @media (min-width:1024px) { ... }

        largeLaptop: { min: "1440px" },
        // => @media (min-width: 1440px) { ... }

        "4kDesktop": { min: "2560px" },
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};
