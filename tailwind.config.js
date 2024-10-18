module.exports = {
  darkMode: 'class',
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/news/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ] , 
  daisyui: {
    themes: ["default"],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}
