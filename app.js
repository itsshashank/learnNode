var express = require('express')
var app = express()
var fs = require('fs')
var http = require('http').Server(app)
var cors = require('cors')
app.use(cors())

app.use(express.json())

app.get('/listEmployees',function(req,res){
    fs.readFile(__dirname+"/"+"employees.json","utf8",function(err,data){
        console.log(data)
        res.end(data)
    })
})

app.get('/listEmployeeById/:id',function(req,res){
    fs.readFile(__dirname+"/"+"employees.json",'utf8',function(err,data){
        var Users = JSON.parse(data)
        var User = Users["employee"+req.params.id]
        console.log(User)
        res.end(JSON.stringify(User))
    })
})

app.post("/addEmployee/:id",function(req,res){
    finalData ='';
    fs.readFile(__dirname+"/"+"employees.json","utf8",function(err,data){
        newUser=req.body
        data=JSON.parse(data)
        data["employee"+req.params.id]=newUser
        finalData=JSON.stringify(data)
        fs.writeFile(__dirname+"/"+"employees.json",finalData,err=>{
            if(err){
                console.log(err)
                return
            }
        })
        res.end(JSON.stringify(data))
    })
})

app.put('/updateEmployee/:id',function(req,res){
    finalData ='';
    fs.readFile(__dirname+"/"+"employees.json","utf8",function(err,data){
        newUser=req.body
        data=JSON.parse(data)
        data["employee"+req.params.id]=newUser
        finalData=JSON.stringify(data)
        fs.writeFile(__dirname+"/"+"employees.json",finalData,err=>{
            if(err){
                console.log(err)
                return
            }
        })
        res.end(JSON.stringify(data))
    })
})

app.delete('/sdeleteEmployee/:id',function(req,res){
    fs.readFile(__dirname+"/"+"employees.json","utf8",function(err,data){
        data=JSON.parse(data)
        delete data["employee"+req.params.id]
        finalData=JSON.stringify(data)
        fs.writeFile(__dirname+"/"+"employees.json",finalData,err=>{
            if(err){
                console.log(err)
                return
            }
        })
        res.end(JSON.stringify(data))
    })
})

var server = http.listen(8888, () => {
    console.log('Server running at http://127.0.0.1:8888/');
})