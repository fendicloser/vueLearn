var express=require('express')
var bodyPaser=require('body-parser')

var userRouter=express.Router()
var pool=require('../pool')

userRouter.use(bodyPaser.urlencoded({extended:false}))
userRouter.post('/signUp',(req,res)=>{
    console.log(req.body.name)
    res.send(req.body)
})

var data={
    data1:{id:1,name:'北京',value:1000},
    data2:{id:2,name:'天津',value:1200},
    data3:{id:3,name:'上海',value:1090},
    data4:{id:4,name:'广州',value:1600},
    data5:{id:5,name:'山东',value:900},

}
userRouter.get('/tryParam',(req,res)=>{
    res.json(data)
})

userRouter.get('/login',(req,res)=>{
    var name=req.query.name;
    var pwd=req.query.pwd;
    var sql='select name from xz_login where name=? and pwd=?'
    pool.query(sql,[name,pwd],(err,result)=>{
        if (err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:'incorrect username and password'})
        }else{
            res.send({code:1,msg:'login success'})
        }
    }) 
})
module.exports=userRouter