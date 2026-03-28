const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f4kjao',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true, // Enable recording  
    videoCompression: 25, // Higher compression (smaller files)  
    videoUploadOnPasses: true, // Save videos for passing tests  
    videoFolder: 'tests/e2e-videos', // Custom storage path
  },
});
