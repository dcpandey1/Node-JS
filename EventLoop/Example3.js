const fs = require("fs");


const a = 100;
//In this example 2nd setImmediate will be called before 2nd Timer
// because event loop waits at Poll phase when it starts excuting after the file read
// It will go at Check phase and execute 2nd setImmedidate before 2nd Timer
fs.readFile("../Aysnc/file.txt", 'utf8', (err, data) => {
    setTimeout(() => console.log("2nd Timer"), 0)
    setImmediate(() => { console.log("2nd setImmediate") })
    Promise.resolve("2nd Promise").then(console.log);
    process.nextTick(() => console.log("2nd Process Next Ticked"));
    console.log("File Reading is done")
})

Promise.resolve("Promise").then(console.log);

setImmediate(() => {
    console.log("Set Immediate Called");
});

setTimeout(() => {
    console.log("Set Timeout called");

}, 0);

process.nextTick(() => console.log("Process Next Ticked"));

function printFn() {
    console.log("Sync Function called");
};


printFn();

/* Output
Sync Function called
Process Next Ticked
Promise
Set Timeout called
Set Immediate Called
File Reading is done
2nd Process Next Ticked
2nd Promise
2nd setImmediate
2nd Timer
*/
