const fs = require('fs');

fs.writeFile('./text', 'this is test', { encoding: 'utf8' }, err => {
  if (err) throw err;
  console.log('done!');

})

const content = Buffer.from('this is a test.');

fs.writeFile('./text', content, err => {
  if (err) throw err;
  console.log('done!');

})