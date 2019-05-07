var express = require('express')

var app=express()
app.use(express.static('public'))
app.use(express.static('public/views'))
app.use(express.static('public/src'))
app.listen(8081)
