const child_process = require('child_process');

const { spawn } = child_process;

const streams = spawn('ls', ['-la'], {
    cwd: '/'
});

streams.stdout.on('data', (chunk) => {
    console.log(chunk.toString())
})



