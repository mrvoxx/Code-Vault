const { readFile } = require('fs').promises;

// const util = require('util');
// const readFilePromise = util.promisify(readFile)

const start = async()=>{
    try{
        //const first = await readFilePromise('t4_read.txt','utf8');
        const first = await readFile('t4_read.txt','utf8');
        console.log(first);
    }
    catch(error){
        console.log(error);
    }
}

start();