/**
 * 某些结果不想被用户看到，或需要用户显示调用才能看到，应放到一个方法里
 */

console.log('This is a module');

const testVar = 100;

function test () {
    console.log(testVar);
}

module.exports.testVar = testVar;
module.exports.testFn = test;
