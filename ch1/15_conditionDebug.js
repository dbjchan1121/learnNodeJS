// 条件调试

function test (n) {
    console.log(n)
}
// 当条件满足时开启断点
for (let i = 0; i < 100; i++) {
    const n = parseInt(Math.random() * 10);

    test(n);
}