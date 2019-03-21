console.log(exports === module.exports); // true

exports.test = 100;

exports = {
    a: 1
}

console.log(exports === module.exports); // false