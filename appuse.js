var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


var multer  = require('multer');
var upload = multer({ dest: __dirname+'/tmp/'});
   
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/file_upload',upload.single('file'),function (req, res) {
   try{
      console.log(req.file)
      res.send(req.file);
   }catch(err){
      res.send(400);
   }
})

var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})