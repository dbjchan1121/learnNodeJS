const fs = require('fs');

// 读文件是异步操作
const result = fs.readFile('./06_fs.js', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

console.log(result); // undefined
 