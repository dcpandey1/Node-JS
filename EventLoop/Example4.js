const fs = require("fs");


const a = 100;

fs.readFile("../Aysnc/file.txt", 'utf8', (err, data) => {
    console.log("File Reading is done")
})

Promise.resolve("Promise").then(console.log);

setImmediate(() => {
    console.log("Set Immediate Called");
});

setTimeout(() => {
    console.log("Set Timeout called");

}, 0);

// Nested nextTick will be complteted fisrt before going for any other callback
process.nextTick(() => {
    process.nextTick(()=>console.log("Inner Process Next Tick"))
    console.log("Process Next Tick")
    
});

/* Output
Process Next Ticked
Inner Process Next Tick
Promise
Set Timeout called
Set Immediate Called
File Reading is done
*/
