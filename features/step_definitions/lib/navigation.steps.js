module.exports = function ({ APP, bs }) {

    const iAmAtThePage = (given) => {
        given(/^I am at the page$/, async (path) => {
          await bs.page.goto(`${APP}`).catch(e => console.log(e))
        })
    }

    const thenISeeThePage = (then) => {
        then(/^I see the page "([^"]*)"$/, async (path) => {
            const url = await bs.page.url()
            expect(url.split('/').pop()).toBe(path)
            console.log(url, path)
        })
    }

    const iAmUser = (given) => {
        given(/^I am user "([^"]*)"$/, async (expertName) => {

        })
    }

    return { iAmAtThePage, thenISeeThePage, iAmUser }
}
