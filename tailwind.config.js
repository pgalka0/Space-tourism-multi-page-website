module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxl: { max: '1600px' },
      tablet: { max: '1023px' },
      mobile: { max: '439px' },
    },
    colors: {
      'black': '#0B0D17',
      'lightblue': '#D0D6F9',
      'white': '#FFFFFF'
    },
    fontFamily: {
      bellefair: ['Bellefair'],
      barlowCondensed: ['Barlow Condensed'],
      barlow: ['Barlow'],
    },
    extend: {
      backgroundImage: {
        'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('/assets/home/background-home-mobile.jpg')",
        'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'destination-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
      }
    },
  },
  plugins: [],
}