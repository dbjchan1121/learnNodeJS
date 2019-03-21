// 下一事件队列第一条
setImmediate(() => {
    console.log('this is immediate');
})
// 两者之间
setTimeout(() => {
    console.log('this is timeout');   
})
// 事件队列最后一条
// nextTick若出现循环或长时间调用会阻塞
process.nextTick(() => {
    console.log('this is nextTick');
    process.nextTick(() => {
        console.log('this is nextTick 2');
    })
})