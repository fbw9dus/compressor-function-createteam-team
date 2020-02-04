const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');

inp.pipe(gzip)
  .on('error', () => {
    console.log("Error gzip")
  })
  .pipe(out)
  .on('error', () => {
    console.log('Error out')
  });