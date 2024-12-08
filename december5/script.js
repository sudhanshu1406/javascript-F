// strings.

let header = "template literals";
let tags = ["template literals","javascript","es6"];
let text = `<h2>${header}</h2><ul>`;

for(let x of tags){
    text += `<li>${x}</li>`;
}
text += `</ul>`;

document.getElementById("div").innerHTML = text;

// a function passed as an argument to another function is called as a call back function.

// (for each) loop only applied on array...
// for each method taks a callback function as an argument

var arr = [12,23,34,45,56];
arr.forEach(calculate);
function calculate(y){
    console.log(y*100);
}

// Math

let output = Math.PI;
output = Math.round(45.43463657);
// math.round rounds to the nearest whole number
output = Math.ceil(45.2355);
// math.ceil rounds to the nearest higher whole number
output = Math.floor(35.6674);
// math.floor rounds to the nearest lower whole number
output = Math.trunk(2.999);
// math.trunk rounds the integer value
console.log(output);