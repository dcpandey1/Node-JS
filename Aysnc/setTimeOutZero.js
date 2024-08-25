
const https = require("https");
console.log("Hello");


// This call back only be excuted when the call stack is empty
// Once the whole code gets executed then only call back gets executed

setTimeout(() => {
    console.log("Print after 0 sec");
    
}, 0);


console.log("End");