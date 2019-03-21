const modA = require('./05_modA');
// 在modB的引用在modA已经缓存
const modB = require('./05_modB');

console.log(modA.test);
console.log(modB.test);
