setTimeout(() => {
    process.send({ foo: 'bar' });
}, 2000);

process.on('message', function (m) {
    console.log('子进程得到消息:', m);
});