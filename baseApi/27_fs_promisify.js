const fs = require('fs');
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

// read('./27_fs_promisify.js').then(data => {
//   console.log(data.toString());

// }).catch(err => {
//   console.log(err);

// })

async function test() {
  try {

    const content = await read('./27_fs_promisify.js');
    console.log(content.toString());

  } catch (err) {
    console.log(err);

  }
}

test();