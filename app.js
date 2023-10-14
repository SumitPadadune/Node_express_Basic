// // OS MODULE
// const os = require('os')

// //info about currwnt useer
// const user = os.userInfo()
// // console.log(user) return info about user




// console.log(`the system uptime ${os.uptime()}seconds`) Return uptime of syst

// const currentOs = {
//     name: os.type(),
//     relese: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem() 
// }
// console.log(currentOs)

// Path Module

// const path = require('path')

// console.log(path.sep)
// const filePath = path.join('/content','test.txt')
// console.log(filePath)

// const base = path.basename(filePath) 
// console.log(base)

// const absolute = path.resolve(__dirname,'content','test.txt');
// console.log(absolute)
// console.log(path.parse('E:\FCCNode\app.js'))

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)
 