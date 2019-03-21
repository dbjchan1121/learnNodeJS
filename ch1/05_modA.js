module.exports.test = 'A';

const modB = require('./05_modB');
console.log('modA: ', modB.test);

// 全部加载则显示AA
module.exports.test = 'AA';
