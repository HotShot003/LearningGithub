const http = require('http');
const myJSON = require('./JSON');
console.log(myJSON);
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/JSON'});
    res.write(`Hello `);
    res.write(`World, `);
   // res.write( `<br> URL = ${req.url}`)
    res.write(` Hello to this Fucking world. We are at 2023 now,but still Fucking World really sucks man.`)
   // res.write(JSON.stringify(myJSON));
    res.end();

}).listen(5000);
console.log('Server is Running ......');