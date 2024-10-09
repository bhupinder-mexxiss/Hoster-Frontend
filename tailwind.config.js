const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.{js,jsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      '2xs': "400px",
      xs: "470px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      '2xl': "1280px",
      '3xl': "1400px",
      '4xl': "1500px",
      'fluid': "1650px"
    },
    extend: {
      backgroundImage: {
        'pinkPurple-gradient-70': 'linear-gradient(225deg, rgba(212, 8, 140, 0.7) 14.64%, rgba(204, 8, 140, 0.7) 17.47%, rgba(133, 7, 138, 0.7) 47.17%, rgba(89, 6, 137, 0.7) 68.39%, rgba(72, 6, 137, 0.7) 79%)',
        'pinkPurple-gradient-100': 'linear-gradient(225deg, rgba(212, 8, 140, 1) 14.64%, rgba(204, 8, 140, 1) 17.47%, rgba(133, 7, 138, 1) 47.17%, rgba(89, 6, 137, 1) 68.39%, rgba(72, 6, 137, 1) 79%)',
        'pink-gradient': 'linear-gradient(91.24deg, #FFFFFF -151.39%, #CF088C 39.72%, #CF088C 60.99%, #CF088C 80.28%, #FFFFFF 231.81%)',
        'blue-gradient': 'linear-gradient(161.42deg, #6EE8FC 5.47%, #6AE2FB 21.27%, #5ED1F7 42.01%, #4BB5F1 65.72%, #308EE8 91.39%, #267FE5 100.28%)',
        'bg-gradient': 'linear-gradient(185.63deg, #03091D -26.4%, #132059 190.03%, #03091D 406.47%),linear-gradient(0deg, #070E2A, #070E2A)'
      },
      colors: {
        'primary': '#00858E',
        'text1': '#303030',
        'text2': '#545454',
        'text3': '#505152',
        'border1': '#D3D3D3',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
};
