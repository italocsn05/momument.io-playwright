import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
    testDir: '././src/specs',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    timeout: 30000,
    use: {
        trace: 'on-first-retry',
        baseURL: process.env.BASE_URL,
        testIdAttribute: 'data-testid',
    },
    expect: {
        timeout: 10000,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
    ],
})
