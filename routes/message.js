const router = require("express").Router()
const messageService = require("../services/message-service")

router.post("/" , (request, response, next) => {
    const message = request.body.message
    
    messageService.response(message)
        .then((answer) => {
            response.json(answer)
        }, (error) => {
            response.sendStatus(404)
        })
})

module.exports = router