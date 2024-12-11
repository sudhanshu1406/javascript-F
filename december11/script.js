let name = "  sudhanshu mehto   ";

var trimedtext = name.trim();
// the trim() method removes whitespaces from both sides of a string...

console.log(trimedtext);

// splitting a string into an array:=======================================================

const data = "this is a string which will split into array";

const splitteddata = data.split(" ");

console.log(splitteddata);

// slice() extracts a part of a string, it takes two parameters 1st first is the starting 
// position and 2nd is the ending position and ending position in not included..

const something = "javascript is a programing language";

let newdata = something.slice(4,10);

// if you ommit the 2nd parameter it will slice the remaning string..

newdata = something.slice(15);

// you also include negetive as well as..

newdata = something.slice(-13,-4)

console.log(newdata);

// substring ==============================================================================

// the defference in slice() and substring() is only that there is no negetive value included otherwise it is completely same as slice()

newdata = something.substring(0,4);

console.log(newdata);

// substr ================================================================================

// 1st parameter is starting position and

// 2nd parameter is length of the string you want to extract

newdata = something.substr(0,20);
console.log(newdata);

// replace === and replaceall =============================================================================

const mystring = "all that glitters is not gold. gold is precious";

// replace method only replace a first matched word.

let newtext = mystring.replace("gold", "silver");

console.log(newtext);

newtext = mystring.replaceAll("gold", "silver");

console.log(newtext);


