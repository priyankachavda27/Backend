const http = require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
   res.setHeader("content-type","text/html");
   if(req.url==="/about"){
    res.statusCode=200; 
fs.readFile("about.txt",(err,data)=>{
    if(err){
        console.log("Error",err)
        return;
    }
   res.end(`Data: ${data.toString()}`);
});
   }
   else if(req.url==="/contact"){ 
   
fs.readFile("Contact.txt",(err,data)=>{
    if(err){
        console.log("Error",err)
        return;
    }
    res.end(`Data: ${data.toString()}`);
});
   }
   else{
    res.statusCode=404
    res.end("Page not Found");
   }
});


server.listen(3000,()=>{
    console.log("Server started at Port 3000")
});


