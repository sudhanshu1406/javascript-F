var username = "harry";
var lastname = "porter";

console.log(username + " " + lastname);

var mypara = document.getElementById("demo");
console.log(mypara)
mypara.innerHTML = "harry porter";
// using dom (document object model) you can manipulate 3 things
// innerHTML, css(style), attributes.
function display(){
    mypara.innerHTML = "this is from asgaurd called by thor odin's son"
}

function styleing(){
    mypara.style.color = "red";
    mypara.style.backgroundColor = "yellow";
    mypara.style.border = "2px solid red";
    mypara.style.padding = "15px";
    mypara.style.boxShadow = "0px 0px 10px 2px black";
}

var myinput = document.getElementById("input1");
var image1 = document.getElementById("myimg"); 

function change(){
    myinput.value = "indore";
    image1.src = "http://wallpapercave.com/wp/3xlHdfR.jpg";
}