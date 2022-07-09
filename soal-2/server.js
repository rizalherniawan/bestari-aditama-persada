const express = require('express')
const app = express()
const PORT = 5000
const api = require('./routes')
const errorHandler = require('./helper/errorHandler')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', api)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is connected to PORT: ${PORT}`)
})