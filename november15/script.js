var heading = document.getElementById("demo");

var name = "john doe";
var age = 19;
// concatination
console.log(name + " " + age);

// heading.innerHTML = name + " " + age;

// to get value from user
var username = prompt("enter your name ");
var userage = prompt("enter your age ");

heading.innerHTML = username + " " + userage;

// get color name and background color
// from user and apply on heading
// var fname = document.getElementById("demo");
// fname.innerHTML = "sudhanshu";

var b1 = prompt("enter your color ");
var b2 = prompt("enter your background color ");

heading.style.color = b1;
heading.style.backgroundColor = b2;

// change attribute
var myimg = document.getElementById("img1");
myimg.src = "https://www.allo-image.net/stockimg/upload/3467768495a4f599cced094k_wallpaper_5.jpg";

// task to do
// take a name from user and display in innerHTML of h1 element and change its style.
