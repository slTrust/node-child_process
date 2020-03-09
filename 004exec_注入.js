const child_process = require('child_process');

const { exec } = child_process;

exec('ls ; pwd', (error, stdout, stderr) => {
    console.log(error);
    console.log(stdout);
    console.log(stderr);
})

