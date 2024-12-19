const fruits = ["apple","kiwi","grapes","watermelon","pineapple"];

// sort method sorts the item alphabetically
fruits.sort();
console.log(fruits);

// reverse method reverse the items of an array
fruits.reverse();
console.log(fruits);

// compare function to sort the item numerically
const number = [100,3,5566,2999,478787,4563];

number.sort(function(a,b){
    return a-b;
});
console.log(number);
number.reverse();
console.log(number);

// to string - to convert an array to a string
const newfruit = fruits.toString();
console.log(newfruit,typeof newfruit);

// join method - to join the elements of an array into a string with a separator
const joinarray = fruits.join(" ");
console.log(joinarray);

// table
const student = [
    {name:"luvkush",course:"frontend",city:"bhopal"},
    {name:"sudhanshu",course:"backhand",city:"indore"},
    {name:"rajiv",course:"fullstack",city:"itarsi"},
    {name:"pranav",course:"python",city:"rewa"},
    {name:"harsh",course:"react",city:"pune"}
];

function display(){
    var table = `
    <table border = "1px" width = "600px" bgcolor = "lightblue">
    <tr>
    <th>NAME</th>
    <th>COURSE</th>
    <th>CITY</th>
    </tr>
    `;

    student.map(function(x){
        table += `
        <tr>
        <td>${x.name}</td>
        <td>${x.course}</td>
        <td>${x.city}</td>
        </tr>
        `;
    });

table += `</table>`;
document.getElementById("demo").innerHTML = table;
}