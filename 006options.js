const child_process = require('child_process');

const { execFile } = child_process;

execFile('ls', ['-la'], {
    cwd: '/', // 当前命令执行的工作目录
    env: { NODE_ENV: 'development' },// 环境变量
    maxBuffer: 1024 * 1024,// 设置最大缓存
    // shell:  设置用什么 shell
}, (error, stdout) => {
    console.log(error)
    console.log(stdout)
})


