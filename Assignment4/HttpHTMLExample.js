var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (request, response) {  

    fs.readFile("Sample.html", function (err, data) {
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
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');