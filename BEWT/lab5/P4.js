const { hostname } = require("os");

const urlObj= new URL("https://example.com/pages?Name=Priyanka&Age=18");

console.log("Protocol",urlObj.protocol)
console.log("Hostname",urlObj.hostname)
console.log("Pathname",urlObj.pathname)

urlObj.searchParams.forEach((value,key)=>{
    console.log(`${key} : ${value}`);
})

