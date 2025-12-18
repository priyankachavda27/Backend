const cp = require('child_process');

const Child= cp.spawn("cmd.exe",["/c","dir","/s","c:\\"]);
Child.stderr.on('data',(data)=>{
    console.log(`STDERR: ${data}`);
})

Child.stdout.on('data',(data)=>{
    console.log(`STDOUT: ${data}`);
})

Child.on('close',(data)=>{
      console.log(`CLOSE: ${data}`);
})