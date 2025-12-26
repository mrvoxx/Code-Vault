const { readFile } = require('fs');

const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(error,data) =>{
            if(error){
                reject(error);
            }

            else{
                resolve(data);
            }
        });
    });
}

// getText('t4_read.txt')
// .then(result => console.log(result))
// .catch((error)=> console.log(error));


const start = async()=>{
    try{
        const first = await getText('t4_read.txt');
        console.log(first);
    }
    catch(error){
        console.log(error);
    }
}

start();