/**
 * argv
 * argv0
 * execArgv
 * execPath
 */

const {argv, argv0, execArgv, execPath} = process;

argv.forEach(item => {
    console.log(item); // 可以看到命令行传递的参数
})

console.log(argv0);

console.log(execArgv);