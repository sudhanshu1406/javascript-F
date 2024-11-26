// object literls

const person = {
    name : "sudhanshu",
    age : 19,
    city : "bhopal",
};
// to know the datatype of object
console.log(typeof(person));
console.log(person.name);
console.log(person.age);
console.log(person.city);
// array
const arr = [1,2,3,4,5];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[3]);

// function
function sayhello(){
    console.log("hello world");
    // alert("hello world");
    document.write("hello world");
}
sayhello();

// function with parameters
function add(num1,num2){
    return num1 + num2;
}
// arguments
console.log(add(20,30));
console.log(add(200,310));

document.getElementById("demo").innerHTML = add(200,210);

// let number = 245;

function cube(number){
    return number*number*number;
}
console.log(cube(225));

// function expression

const multiply = function(x,y){
    return x * y;
}
console.log(multiply(4,4));

// arrow function

const divide = (a,b)=>{
    return a/b;
}
console.log(divide(100,2));

