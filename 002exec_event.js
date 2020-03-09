const child_process = require('child_process');

const { exec } = child_process;

// 异步
/*
exec('ls', (error, stdout, stderr) => {
    console.log(error);
    console.log(stdout);
    console.log(stderr);
})
*/

const streams = exec('ls');
// 不用回调 用事件
streams.stdout.on('data', (chunk) => {
    console.log(chunk)
})

