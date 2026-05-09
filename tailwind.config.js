module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  darkMode: 'class', // Critical: allows manual toggling
  theme: {
    extend: {
      // personalise brand color with font( using tailwindcss) including for dark mode
      backgroundImage: {
        //using variable define in style.css file
        'page-gradient': 'var(--bg-gradient)',
        'bg-muted': 'var(--muted)'
      } ,
      colors: {
        'main-text': 'var(--text-color)',
        'secondary-text': 'var(--text-secondary)',


        //toggle colors
        'toggle-track': 'var(--toggle-bg)'

      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      }
  } },
  plugins: [],
}