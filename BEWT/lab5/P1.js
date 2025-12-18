const {exec} = require('child_process')

exec("node --version",(error,stdout,stderr)=>{
if(error){
    console.log('Error:',error)
    return;
}
else if(stdout){
    console.log('standard output:',stdout)
    return;
}
else if(stderr){
    console.log('standard Error:',stderr)
    return;
}
})

exec("Python P1.py",(error,stdout,stderr)=>{
if(error){
    console.log('Error:',error)
    return;
}
else if(stdout){
    console.log('standard output:',stdout)
    return;
}
else if(stderr){
    console.log('standard Error:',stderr)
    return;
}
})