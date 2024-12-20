// map returns a new array
// forEach does not return a new array just work on the element
const actor = [
    {name:"shahrukh khan",location:"mumbai"},
    {name:"johnny dep",location:"london"},
    {name:"brad pitt",location:"new york"},
    {name:"tony stark",location:"marvels"}
];

function display(){
    let table = `
    <table border = "1px" width = "600px" bgcolor = "lightblue">
    <tr>
    <th>NAME</th>
    <th>LOCATION</th>
    </tr>
    `;

    actor.map(function(x){
        table += `
        <tr>
        <td>${x.name}</td>
        <td>${x.location}</td> 
        </tr>`; 
    });
   
    table += `</table>`;
    document.getElementById("demo").innerHTML = table;
};

// filter
const number = [1,2,3,4,5,6,7,8,9,10,11,12];

const filterdnum = number.filter(function(x){
    return x % 2 === 0;
});
console.log(filterdnum);

// filter number greater than 50
const number1 = [10,24,333,5,5646,56,5,66,44,34,56];

const filterdnum1 = number1.filter(function(x){
    return x > 50;
});
console.log(filterdnum1);

// date format
const d1 = new Date();
console.log(d1);

// months = 0-11 , days = 0-6
// year,month,date,hour,minute,second,milisecond
const d2 = new Date(2020,11,23,12,34,45,3000);
console.log(d2);
const d3 = new Date(2020,15,45,12,34,45,3000);
console.log(d3);

// year,month,date,hour,minute,second
const d4 = new Date(2020,15,45,21,55,5000);
console.log(d4);

// year,month,date,hour,minute
const d5 = new Date(2020,15,45,21,55);
console.log(d5);

// year,month,date,hour
const d6 = new Date(2020,15,45,21);
console.log(d6);

// year,month,date
const d7 = new Date(2020,15,45);
console.log(d7);

// year,month
const d8 = new Date(2020,15);
console.log(d8);

// single year is treated as milisecond
const d9 = new Date(2020);
console.log(d9);

// date methods
const year = today.getFullYear();
console.log(year);
const month = today.getMonth();
console. log(month); 
const date = today.getDate();
console. log(date); 





