var express = require('express')



var app= express()
var userRouter=require('./router/user')
const cors=require('cors')
app.use(cors({
    origin:[
        "http://127.0.0.1:8080",
        "http://localhost:8080",
        'http://172.20.10.3:8080',
        'http://localhost:8081',
        'http://127.0.0.1:8081'
    ],
    credentials:true,
}))
app.use('/user',userRouter)

//引入跨域模块

app.listen(3000)
