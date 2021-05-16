const express = require('express')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000

app.get('/teste', (req, res) => res
    .status(200)
    .send({ mensagem: 'boas vindas à API'}
))

app.listen(port, () => console.log(`O servidor esta rodado na porta ${port}`))

module.exports = app