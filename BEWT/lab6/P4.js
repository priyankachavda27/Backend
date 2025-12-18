const fs = require("fs");
console.log("Start");
fs.appendFile("output.txt"," append extra data to this file",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file created");
})