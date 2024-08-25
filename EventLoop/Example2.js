const fs = require("fs");


const a = 100;


//Its callback will be executed in last because file will be read then callback
// will come in the queue
// It will be called in next cycle
fs.readFile("../Aysnc/file.txt", 'utf8', (err, data) => {
    console.log(data)
})

Promise.resolve("Promise").then(console.log);

setImmediate(() => {
    console.log("Set Immediate Called");
});

process.nextTick(() => console.log("Process Next Ticked"));

function printFn() {
    console.log("Sync Function called");
};

setTimeout(() => {
    console.log("Set Timeout called");

}, 0);

printFn();

/* Output
Sync Function called
Process Next Ticked
Promise
Set Timeout called
Set Immediate Called
Hello OWl 
*/
