const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')


const app = express()
app.use(express.static(__dirname + '/public'));
const PORT = 3300

connectDB()

app.get('/', (req,res)=>{
    res.sendFile('public/index.html', {root: __dirname})
})
app.get('/login', (req,res)=>{
    res.sendFile('public/login.html', {root: __dirname})
})
app.get('/signup', (req,res)=>{
    res.sendFile('public/signup.html', {root: __dirname})
})

app.listen(PORT, ()=>{
    console.log(`server is running fine on  http://localhost:${PORT}`)
})

