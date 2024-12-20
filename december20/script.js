// spread operator
// it copies an object into another object
// it copies an array into another array 

const number1 = [1,2,3,4,5,6];

const number2 = [...number1,10,20,30,40,50];
console.log(number2);

const person = {
    name: "sudhanshu",
    age: 19,
    city: "itarsi"
};

const person1 = {...person,
    subject: "fullstack"
};
console.log(person1);

/* rest parameter(...)
used in the function parameter to */

function display(...x){
    console.log(x);
}
display(1);
display(10,20,30," ");

function sum(...x){
    let sum = 0;
    for(let i=0; i<x.length; ++i)
    {
         sum += x[i]; 
    }
    return sum;
};
console.log(sum(100,200,300));