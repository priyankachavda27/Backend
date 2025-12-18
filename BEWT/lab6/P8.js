// const fs = require("fs");
// console.log("Start");
// fs.copyFile('source.txt','backup.txt',(err)=>{
//         if(err){
//         console.log(err);
//         return;
//     }
//     console.log("successfully copied");

// })

const fs=require("fs")
console.log("hello");
fs.copyFile('hello.txt','demo.txt',(err)=>{
        if(err){
        console.log(err)
        return;
    }
    console.log("file data copied ")
})

