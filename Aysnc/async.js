const fs = require("fs");
const https = require("https");

// sync
fs.readFileSync("./file.txt", 'utf8')
// I connot go further before above gets executes because it is blocking
// It will block the main thread


https.get('https://dummyjson.com/products/1', (res) => {
    console.log("Feched the data");
})

setTimeout(() => {
    console.log("Run after 5 sec")
}, 5000)



// Async
fs.readFile("./file.txt", 'utf8', (err, data) => {
    console.log(data)
})

const a = 10000;
const b = 20000;

function multiply(a, b) {
    const c = a * b;
    return c;
}
const c = multiply(a, b);
console.log(c);


