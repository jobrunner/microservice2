const config = require("../config")

const messageService = {
    response: (message) => {
        // Ok, a Promise here is a little bit overkill. But normaly, this operation have to by ansyc.
        return new Promise((resolve, reject) => {            
            if (message) {
                // Select an answer
                const message = "Hello, {{firstname}} {{lastname}}. " + config.thanks
                resolve(message)
            } else {
                // no message object or empty message: no answer
                reject()
            }
        })
    }
}

module.exports = messageService