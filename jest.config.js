module.exports = {
    verbose: true,
    "preset": "jest-puppeteer",
    "testMatch": [
        "**/spec/features/step_definitions/*.test.js"
        // "**/*.spec.js"
    ],
    "setupFiles": [
        "./jest-cucumber-config.js"
    ]
}
