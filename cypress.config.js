const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.demo.guru99.com/V4/',
    specPattern: 'cypress/frameworks/**/*.cy.{js,jsx,ts,tsx}',
  },
  
})
