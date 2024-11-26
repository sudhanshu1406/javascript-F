// ways to disply output

console.log("hello world");

alert("hello world");

document.write("hello world");

document.getElementById("demo").innerhtml = "hello world";

// variables
// let, var, const
// let and const are es6 features
var global1 = "sudhanshu";
let global2 = "mehto";
const global3 = "shiva";
// var has global scope and let and const has block or function scope

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(b);
}
console.log(a);
// console.log(b);
// console.log(c);

