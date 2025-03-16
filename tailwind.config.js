// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend:{
        colors:{
          customGreen:'#006400',
          customGold:'#BF9830',
          'text':'#050505'
        },
      },
    },
    plugins: [],
  };