const {defineConfig } = require('cypress') //Download library from cypress

module.exports = defineConfig({
    e2e: {
        specPattern : "cypress/support/e2e",
        supportFile : false,
    }
})