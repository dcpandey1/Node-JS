const crypto = require("crypto");

console.log("Blocking ")
// Sync
// sync will not take callback
crypto.pbkdf2Sync('secret', 'salt', 10000000, 64, 'sha512')

//Async
crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512',(err,key)=>{
    console.log("key is generated");
})

console.log("I was waiting because sync code blocked the thread")