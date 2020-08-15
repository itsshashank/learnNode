var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var fs = require('fs')
const { request } = require('http')
const { response } = require('express')
var http = require('http').Server(app)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (request, response) => {
    console.log("get hit")
    fs.readFile("RegisterCustomer.html", function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.write("File not found!");
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data.toString());
        }
        response.end();
    });
})

app.post('/',(request,response)=>{
    console.log("Post hit")
    try{
        var c = request.body
        console.log(c.cname)
        fs.appendFile('sample.txt',"cname="+c.cname+"&age="+c.age+"&city="+c.city+"\n",function(err){
            if(err){
                console.log(err)
            }
        })
        response.sendStatus(200)
    }catch(err){
        response.sendStatus(500)
    }
})

var server = http.listen(8888, () => {
    console.log('Server running at http://127.0.0.1:8888/');
})