var _ = require('lodash');

const extensions = {

    delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        })
    },

    async goToHost(url) {
      await this.page.goto(url)
    }

}



module.exports = function (browserInstance) {
    if (!browserInstance) {
        return
    }
    _.each(extensions, (func, funcName) => {
        browserInstance[funcName] = func.bind(browserInstance)
    })

    return browserInstance
}