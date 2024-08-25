// modules protect their method and variables from leak
// we cannot acess simply using require method 
// We have to export them and import to use

console.log("Sum module got executed")
const varibale = 100;
const caculataSum = (a, b) => {
    const sum = a + b;
    console.log("Sum:", sum);
}

module.exports = { caculataSum, varibale };
// module.exports = { caculataSum: caculataSum }; // Also correct

//Above will be imported like this
// const {caculataSum} = require("./sum")



// module.exports.caculataSum = caculataSum ; // It is also correct
