const fs = require('fs');

// 异步
fs.readFile('./17_fs_readfile.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);

})

// 同步先执行
const data = fs.readFileSync('./16_event_remove.js', 'utf8');
console.log(data);
