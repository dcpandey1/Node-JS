const crypto = require("crypto");

// We can chnage the size of thread pool
process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512',(err,key)=>{
    console.log("key 1 is generated");
})

crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512',(err,key)=>{
    console.log("key 2 is generated");
})
crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512',(err,key)=>{
    console.log("key 3 is generated");
})
crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512',(err,key)=>{
    console.log("key 4 is generated");
})
crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512',(err,key)=>{
    console.log("key 5 is generated");
})

/*Oupput
key 1 is generated
key 2 is generated
key 4 is generated
key 3 is generated
key 5 is generated
 */
