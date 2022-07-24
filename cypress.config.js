const { defineConfig } = require('cypress')
module.exports = defineConfig({
  projectId: 'ipnbuo',
  viewportWidth: 1200,
  viewportHeight: 1200,
  darkMediaQuery: true,
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
