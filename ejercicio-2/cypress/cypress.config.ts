import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  projectId: 'iyhpy5',
  retries: {
    runMode: 2,
    openMode: 0
  },
  screenshotsFolder: 'cypress/screenshots',
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  e2e: {
    supportFile: false,
    testIsolation: true,
    specPattern: 'cypress/e2e/**/*.ts'
  }
});
