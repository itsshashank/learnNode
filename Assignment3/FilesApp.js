const fs = require('fs'); 

console.log("Asynchronously Reading")
fs.readFile('./input.txt',  
        {encoding:'utf8', flag:'r'}, 
        function(err, data) { 
    if(err) 
        console.log(err); 
    else
        console.log(data); 
}); 

// Inter change the both Reads to observe the difference in Readings

console.log("Synchronously Reading")
const data = fs.readFileSync('./input.txt', 
			{encoding:'utf8', flag:'r'}); 

console.log(data); 

