var name = "sudhanshu";
var city = "bhopal";
var lstname = "mehto";
var data = `this is our first string with backtick`;


// template literals or string literals
// explained in ES6

var info = document.getElementById("demo").innerHTML =`this is magic (${data} ${name} ${lstname})`;
var div = document.getElementById("trial");
// div.innerHTML = "<h1>" + name +"</h1>";
div.innerHTML = `<h1>${data}</h1>`

// write a function to display the name and city of a person using template literals and display it in innerhtml

var heading = document.getElementById("new");
heading.addEventListener("click")

function show(){
    heading.innerHTML = `${name} ${city}`;
}


