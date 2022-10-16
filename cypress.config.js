const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "cypress-full-dark-mode",
  viewportWidth: 1200,
  viewportHeight: 1200,
  darkMediaQuery: true,

  e2e: {
    specPattern: "cypress/e2e/**/*-spec\.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: "./example-app/vite.config.js"
    },
    indexHtmlFile: "./example-app/index.html",
    specPattern: "cypress/component/**/*-spec\.{js,jsx,ts,tsx}",
  },
});
