import { defineFeature, loadFeature } from 'jest-cucumber'

const APP = "https://www.google.com"
let browser
let page

jest.setTimeout(30000)

const debugging_mode = {
    puppeteer: {
        headless: false,
        slowMo: 250,
        devtools: false,
        args: [`--window-size=1920,1080`]
    },
    jasmine: 16000
}

const normal_mode = {
    puppeteer: {
        headless: true
    },
    jasmine: 80
}

let puppeteerConfig
if (process.env.NODE_ENV === "debug") {
    console.log(`DEBUGGING MODE`)
    puppeteerConfig = debugging_mode
} else {
    console.log(`HIDDEN BROWSER MODE`)
    puppeteerConfig = normal_mode
}

const feature = loadFeature('./features/goldenPath.feature', {
    tagFilter: '@included and not @excluded'
})

let bs = require('./lib/BrowserSession')(puppeteerConfig)
const { iAmAtThePage, iAmUser, thenISeeThePage } = require('./lib/navigation.steps')({ APP, bs })



defineFeature(feature, test => {

    // before all tests
    beforeAll(async () => {

        await bs.setup()
    })

    // after all tests
    afterAll(() => {
        bs.browser.close().catch(e => console.log(e))
    })

    // after each test
    afterEach(async () => {
        await bs.page.waitFor(3000)
    })

    beforeEach(async () => {
      
    })


    test(`1: User signs in`, ({given, when, then}) => {

        iAmAtThePage(given)

        when(/^I enter "([^"]*)" 's into the input field$/, async (expertName) => {
          await bs.delay(2000)
          await bs.goto('https://www.golem.de')
          expect(2).toBe(2)
        })

        when(/^I enter "([^"]*)" 's password in the login form$/, async () => {

        })

        thenISeeThePage(then)

    })

    test('2: User Sidebar: Go to Create User (success)', ({given, and, when, then}) => {

        iAmUser(given)

        iAmAtThePage(given)

        when(/^I use the user sidebar to go to page "([^"]*)"$/, async (route) => {

        })

        thenISeeThePage(then)

    })
})
