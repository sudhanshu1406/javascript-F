function display(){
    alert("display the function");
}

const display1 = function(){
    alert("hello hello hello")
}

// another way to add event to function
let button = document.getElementById("btn");

button.addEventListener("click",display);
// whenever you pass a function as an argument never use ()
button.addEventListener("mouseover",function(){
    alert("hello from sudhanshu and his team");
});

// query selector

var h1 = document.querySelectorAll("#head");
console.log(h1);

h1[0].innerHTML = "hello from sudhanshu";
h1[0].style.color = "red";
h1[0].style.backgroundColor = "yellow";
