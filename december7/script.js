var output;
output = Math.sign(-23);
// math.sign(x) returns if x is negative(-1), null or positive(1)
output = Math.pow(2,3);
// math.pow(x,y) returns the value of x to the power of y
output = Math.sqrt(225);
// math.sqrt(x) returns the square root of x
output = Math.min(23,45,67,35,5,123,87);
output = Math.max(23,45,67,35,5,123,87);
// math.min(x,y,z) returns the minimum value and maximum value in a list of arguments
output = Math.random();
// math.random() returns the random value from 0 to 1;
output = Math.floor(Math.random()*6)+1;
// both are used because we need only integer
console.log(output);

function randomnumber(min, max){
return Math.floor(Math.random()*(max - min)) + min;
}
console.log(randomnumber(10,20))

function randomnumber2(min, max){
return Math.floor(Math.random()*(max - min + 1)) + min;
}
console.log(randomnumber2(10,20))

// map method

const number = [1,2,3,4,5,6];

const newnumber = number.map(display);

function display(x){
    return x * x;
}
console.log(number);
console.log(newnumber);

// ==================================================
const cars = ["audi","verns","toyota","BMW","tata"];

var text = `<ul>`;

cars.map((x)=>{
    text += `<li>${x}</li>`;
});
text += `</ul>`;
document.body.innerHTML = text;
