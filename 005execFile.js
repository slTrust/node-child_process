const child_process = require('child_process');

const { execFile } = child_process;

const user_input = '. && pwd';

execFile('ls', ['-la', user_input], (error, stdout, stderr) => {
    console.log(error);
    console.log(stdout);
})

