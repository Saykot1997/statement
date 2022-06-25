module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nuosu': ['Nuosu SIL', 'serif'],
        'lora': ['Lora', 'serif'],
      },

      backgroundImage: {
        'water-mark': "url('./Photos/islami_bank_water_mark.png')",
        'ucb-water-mark': "url('./Photos/ucb_bank/water_mark.png')"
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '75%': '75%',
      },
      backgroundPosition: {
        'left-custom': '70% 120%',
      }
    },
  },
  plugins: [],
}
