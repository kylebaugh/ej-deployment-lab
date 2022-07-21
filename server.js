const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 4005

let Rollbar = require("rollbar");
let rollbar = new Rollbar({
  accessToken: '61a8299df9294656ab54d3e06c247f14',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log('hello world')

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