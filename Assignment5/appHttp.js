var fs = require('fs')
var http = require('http')

http.createServer( function (request, response) {  
    fs.readFile("RegisterCustomer.html", function (err, data) {
      if (err) {
         console.log(err);
         response.writeHead(404, {'Content-Type': 'text/html'});
         response.write("File not found!");
        } else {	
         response.writeHead(200, {'Content-Type': 'text/html'});	
         response.write(data.toString());		
      }
      response.end();
   });   
   if(request.method==="POST"){
       console.log("postmetod called")
       var body=""
       request.on("data",function(c){
           body+=c;
       });
       request.on('end',()=>{
            fs.appendFile('sample.txt',body+"\n",function(err){
                if(err){
                    console.log(err)
                    response.statusCode=500
                }else{
                    response.writeHead(200, {'Content-Type': 'text/html'});
                }
            })
       });
   }
}).listen(8888);
