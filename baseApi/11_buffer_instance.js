/**
 * buf.length
 * buf.toString()
 * buf.fill()
 * buf.equals()
 * buf.indexOf()
 * buf.copy()
 */

const buf = Buffer.from('This is a test!');
console.log(buf.length);

const buf2 = Buffer.alloc(10); // allocUnsafe结果一样
buf2[0] = 2;

console.log(buf2.length);

console.log(buf.toString('base64'));

// fill
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
// 填充10 从第三个开始填到第7个之前止
console.log(buf3.fill(10, 2, 6));

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test!');

console.log(buf4.equals(buf5));
console.log(buf4.equals(buf6));

console.log(buf4.indexOf('t'));
console.log(buf4.indexOf('1'));
