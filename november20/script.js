function add(num1,num2){
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);
    var add = document.getElementById("demo").innerHTML = num1+num2;
}
function subtract(num1,num2){
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);
    var subtract = document.getElementById("demo").innerHTML = num1-num2;
}
function multiply(num1,num2){
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);
    var multiply = document.getElementById("demo").innerHTML = num1*num2;
}
function divide(num1,num2){
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);
    var divide = document.getElementById("demo").innerHTML = num1/num2;
}

function display(){
    var myinput = document.getElementById("myinput").value;
    var display = document.getElementById("demo").innerHTML = myinput;
}