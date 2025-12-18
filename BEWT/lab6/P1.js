const fs = require("fs");
console.log("Start");
fs.readFile("hello.txt",(err,data)=>{
    if(err){
        console.log("Error",err);
        return;
    }
    console.log("data:",data.toString());
})

console.log("End");