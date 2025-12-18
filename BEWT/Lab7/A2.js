const http = require("http")

const server=http.createServer((req,res)=>{
   res.setHeader("content-type","text/html");
   if(req.url==="/"){
    res.statusCode=200;
    res.end("<h1>Home Page</h1>");
   }
   else if(req.url==="/about"){
    res.end("About Page");
   }
      else if(req.url==="/Login"){
    res.end("Login Page");
   }
      else if(req.url==="/Contact"){
    res.end("Contact Page");
   }
      else if(req.url==="/Logout"){
    res.end("Logout Page");
   }
   else{
    res.statusCode=404
    res.end("Page not Found");
   }
});

server.listen(3000,()=>{
    console.log("Server started at Port 3000")
});