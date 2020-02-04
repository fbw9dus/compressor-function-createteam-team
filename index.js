<<<<<<< HEAD
const fs   = require('fs')
const zlib = require('zlib')
const path = require('path')
const args = process.argv.slice(2)





function compresMe(pathToZip){
        const file      = 'input.txt'
        const finalpath = path.resolve(__dirname,file )
    
    if(!pathToZip){
        pathToZip = finalpath
        console.log(pathToZip)
    }else{
         pathToZip = path.resolve(__dirname, pathToZip)
    }

        const gzip = zlib.createGzip()
        let input  = fs.createReadStream(pathToZip)
        const otp  = fs.createWriteStream(pathToZip + '.zip')

    input.pipe(gzip).pipe(otp)


}

compresMe(args[0])
=======
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
>>>>>>> 4c9f6a3e2c9ea3e3c2f24673553a5224768183d4
