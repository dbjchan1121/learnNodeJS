const path = require('path');

const mod = require('../env&debug/02_cusmod');
console.log(mod.testVar);

console.log('__dirname', __dirname); // 当前文件文件绝对路径
console.log('process.cwd()', process.cwd());
console.log('./', path.resolve('./'));

// __dirname __filename总是返回文件绝对路径
// process.cwd()总是返回执行node命令所在文件夹
// ./
// 在require方法中总是相对当前文件所在文件夹
// 在其他地方和process.cwd()一样，相对node启动文件夹

