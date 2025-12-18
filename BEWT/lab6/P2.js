const fs = require("fs");
console.log("Start");
try{
data=fs.readFileSync("hello.txt","utf-8")
}catch(err){
console.log(err);
}
console.log(data);

console.log("End");