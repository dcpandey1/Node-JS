require("./abc");
const { varibale } = require("./calcuate/sum");
// const {caculateMultiply} =  require("./calcuate/multiply");

const {caculateMultiply,caculataSum} = require("./calcuate")

// import { caculataSum,varibale } from "./sum.js";
// will not work if dont use .js

const data = require("./data.json")
console.log(data)
var a = 10;
var b = 20;
caculataSum(a, b);
caculateMultiply(a, b);

console.log("varibale", varibale)
