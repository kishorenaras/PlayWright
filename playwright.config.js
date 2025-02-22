// @ts-nocheck
import { defineConfig, devices, firefox } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  timeout: 30*1000,
  expect :{
    timeout: 80*1000
  },
  reporter :'html',

  use: {
    browserName : 'chromium',
    headless : false, 

    
  },

});

module.exports=config