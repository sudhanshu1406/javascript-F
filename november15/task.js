var heading = document.getElementById("demo");

var username = prompt("enter your name to decorate");
heading.innerHTML = username;

var clr = prompt("enter text color :");
var bgclr = prompt("enter background color :");
var fontS = prompt("enter your fontsize :");
var padd = prompt("enter padding")

heading.style.color = clr;
heading.style.backgroundColor = bgclr;
heading.style.fontSize = fontS;
heading.style.padding = padd;
// heading.style.marginLeft = "700px";
// heading.style.marginRight = "700px";
heading.style.border = "5px solid black"

