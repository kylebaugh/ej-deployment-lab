const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 4005

let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: 'b18a0032b8f7437eb56d39e245024298',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './page.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './main.js'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, './styles.css'))
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})