const {parse, format} = require('path');

const filePath = '/usr/local/bin/no.txt';

const ret = parse(filePath);

console.log(ret);

console.log(format(ret));
