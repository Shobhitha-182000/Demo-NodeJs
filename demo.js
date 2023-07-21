 const http=require('http');
 const server=http.createServer((req,res)=>{
    res.write("<html><body>Hello world</body></html>");
    res.end();
 })
 server.listen(3000);