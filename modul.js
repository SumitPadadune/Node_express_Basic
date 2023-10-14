// Read write in sync fashiton
const {readFileSync,writeFileSync} = require('fs')
const fs = require('fs')

const first = fs.readFileSync('./content/first.txt','utf8');
const sec = fs.readFileSync('./content/subforlder/sec.txt','utf8');

// console.log(first,sec)

writeFileSync('./content/result-sync.txt',`Here is the Result: ${first}, ${second}`)
