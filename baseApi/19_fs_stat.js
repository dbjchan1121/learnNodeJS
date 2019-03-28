const fs = require('fs');

fs.stat('19_fs_stat.js', (err, stats) => {
  if (err) {
    console.log('文件不存在');
    return;
  };
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats);

})