// array literal
const array1 = [1,2,3,4,5];
console.log(array1)

// using new keyword

const array2 = new Array(11,22,33,44,55);
console.log(array2);

const array3 = [];
array3[0] = "happy";
array3[1] = "go";
array3[2] = "lucky";
console.log(array3);

// mixed array
const mixed = [1,2,"hello",{name:"sudhanshu"},[10,20,30]];
console.log(mixed[3].name);
console.log(mixed[4][1]);

const fruits = ["apple","banana","mango","kiwi","pineapple"];
let flen = fruits.length;
let text = `<ul>`;
for(let i= 0; i<flen; ++i)
{
    text += `<li>${fruits[i]}</li>`;
}
text += `</ul>`;
document.getElementById("demo").innerHTML = text;

// push and unshift method
// push method adds the element to the end of the array
fruits.push("dragonfruit");
console.log(fruits);

// unshift method adds the element to the beginning of the array
fruits.unshift("strawberry");
console.log(fruits);

// pop and shift
// pop method delete the element from the end of an array
fruits.pop();
console.log(fruits);

// shift method delete the element from the beginning of an array
fruits.shift();
console.log(fruits);

// slice method
// there are two parameters (starting index, ending index not included)
const sliced = fruits.slice(1,3);
console.log(sliced);
console.log(fruits);

// splice method can be used to remove as well as add element in an array
fruits.splice(2,2,"cherry","orange");
console.log(fruits);
fruits.splice(3,0,"lemon","lichi");
console.log(fruits);

// 
