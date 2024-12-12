let mydata = `Google is a great place to work.google offers great services and google gives many amenities to the employees.`;

// in this (i) is for case sensetive and (g) is for global search

let newdata = mydata.replace(/google/ig,"yahoo");
console.log(newdata)