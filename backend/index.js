const connectToMongo = require("./db")
const express = require('express')

connectToMongo()
const app = express()
const port = 5000

// if we want to use the requestAnimationFrame.body then we have to use a middlewhere mentained below
app.use(express.json()) 


//available routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})