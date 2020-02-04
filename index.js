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