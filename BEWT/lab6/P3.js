const fs = require("fs");
fs.writeFile("output.txt","welcome to world",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file created");
})