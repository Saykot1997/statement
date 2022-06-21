module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nuosu': ['Nuosu SIL', 'serif']
      },

      backgroundImage: {
        'water-mark': "url('./Photos/islami_bank_water_mark.png')"
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '75%': '75%',
      }
    },
  },
  plugins: [],
}
