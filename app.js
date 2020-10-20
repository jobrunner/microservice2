const express = require("express")
const config = require("./config")

const app = express()
app.use(express.json())

app.use(require("./routes/format"))
app.use(require("./routes/authentication"))
app.use("/message", require("./routes/message"))
// app.use(require("./routes/default"))

app.listen(config.port, () => {
	console.log("Server running on port " + config.port)
}).on('error', error => {
    console.log(error)
    process.exit(1);
})