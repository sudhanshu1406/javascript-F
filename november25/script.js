// ============================first=================================
function change(){

var heading = document.getElementById("demo");
heading.innerHTML = "button was clicked and text changed";
heading.style.color = "red";
}

// ============================second===============================

function multiply(){
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);

    var ans = document.getElementById("demo2");

    ans.innerHTML = num1*num2;

    ans.style.color = "orange";
}
function divide(){
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);

    var ans = document.getElementById("demo2");

    ans.innerHTML = num1/num2;

    ans.style.color = "orange";
}

// ===========================third==================================
var width = prompt("width of your rectangle");
var height = prompt("height of your rectangle");

var area = document.getElementById("demo3");
area.innerHTML = width*height;
area.style.color = "red";
