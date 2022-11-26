const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jwdqg2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 80000
  },
});
