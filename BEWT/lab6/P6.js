const fs = require("fs");
console.log("Start");
fs.mkdir("my-data",(err)=>{
    if(err){
        if(err.code === 'EXISTS'){
 console.log("file already exist")
        }
        else{
            console.log("error creating folder");
        }
           
    }
console.log("file already created")
})