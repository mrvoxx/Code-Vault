// const read  = require('fs');
// const write  = require('fs');

// const data = read.readFileSync('./t4_read.txt','utf8');
// console.log(data);

// write.writeFileSync(
//     't4_write.txt',
//     `this is your file data : ${data}`);


const {readFileSync,writeFileSync} = require('fs');
const data_read = readFileSync('./t4_read.txt','utf8');
console.log(data_read);
const data_write = writeFileSync(
    't4_write.txt',`this is your file data : ${data_read} \n` ,{flag : 'a'}
);