const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000

routes(app)

app.listen(port, () => console.log(`O servidor esta rodado na porta ${port}`))

module.exports = app