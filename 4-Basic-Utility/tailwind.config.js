module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter'],
      },
      animation: {
        goyang: 'goyang 1s ease-in-out infinite',
      },
      keyFrames: {
        goyang: {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
