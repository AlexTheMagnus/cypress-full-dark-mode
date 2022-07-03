const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ipnbuo',
  viewportWidth: 1200,
  viewportHeight: 1200,
  darkMediaQuery: true,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:spec', (details) => {
        require('./src')
      })
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
