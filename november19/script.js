// EVENTS
// click, dblclick, mouseover, mouseleave, mouseenter, load

function display(){
    console.log("hello world");
}
var name = "sudhanshu";
var course = "fullstack wed devlopment";

function show(){
    document.getElementById("demo").innerHTML = name + " " + course;
}

function cube(){
    var number = prompt("enter your number");
    var cube = document.getElementById("demo").innerHTML = number*number*number;
}

// take a buttun named change

function change(){
    var heading = document.getElementById("btn");

    heading.style.color = "green";
    heading.style.backgroundColor = "yellow";
}
