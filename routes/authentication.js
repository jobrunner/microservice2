const router = require("express").Router()
const config = require("../config")

router.use((request, response, next) => {
    // Returns an 403 - Forbidden if the secret is not equal to the configured one
    const authHeader = request.headers["x-api-key"] || null
    if (authHeader === config.apiSecret) {
        next()
    } else {
        response.sendStatus(403)
    }
})

module.exports = router