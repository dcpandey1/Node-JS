const crypto = require("crypto");

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


/*
There is only 4 thread in libuv so 
key 5 is generated will be printed only when one of 4 threads become free
We can change the sixe of thread pool
 */