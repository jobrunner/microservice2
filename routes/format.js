const router = require("express").Router()
const config = require("../config")

router.use((request, response, next) => {
    // Malformed headers lead to a '400 - Bad Request'.
    // Valid requests contain headers:
    // - 'Content-Type: application/json'
    // - 'x-api-key: ???'
    if (request.is('application/json') && request.headers["x-api-key"]) {
        next()
    } else {
        response.sendStatus(400)
    }
})

module.exports = router