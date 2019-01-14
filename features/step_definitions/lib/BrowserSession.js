import puppeteer from "puppeteer"

module.exports = function name(puppeteerConfig) {
  class BrowserSession {
    async setup(){
      this.browser = await puppeteer.launch(puppeteerConfig.puppeteer).catch(e => console.log(e))
      this.page = await this.browser.newPage().catch(e => console.log(e))
      this.page.setViewport({width: 1280, height: 720})
      this.page.on('console', msg => console.log('PAGE LOG:', msg.text()))
    }

    async extend() {}
  }

  return require('./extendBrowserSession')(new BrowserSession())
}