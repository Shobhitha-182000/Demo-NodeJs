const http=require('http');
const server=http.createServer((req,res)=>{
    res.write('<html><body><h1>My Name is Shobhitha</h1></body></html>');
    res.end();
})
server.listen(4000);