const express = require("express")
const bookRoute = require("./routes/book")

const app = express()

app.use('/books', bookRoute)

const port = 8000

app.listen(port, () => {
    console.log(`Executando a porta ${port}`)
})