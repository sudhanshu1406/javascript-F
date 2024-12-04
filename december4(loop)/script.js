// this is (for in) loop
//  in for in loop variable will contain index of each person

 const person = {
    fname : "sudhanshu",
    lname : "mehto",
    age : 19,
 }
 var text = "";
 for(let x in person){
    text += `${person[x]} <br>`
 }
 var head = document.getElementById("demo").innerHTML = text;

 const arr = [1,2,3,4,5];
 var text1 = "";
 for(let x in arr)
 {
    text1 += `${arr[x]} <br>`;
 }
 var head1 = document.getElementById("demo1").innerHTML = text1;

// this id (for of) loop
// in for of loop variable will contain value of each person

const name = "javascript";
var text2 = "";
for(let x of name)
{
    text2 += x + "<br>";
}
var head2 = document.getElementById("demo2").innerHTML = text2;

const arr1 = ["shiva","rajiv","abhinav","sudhanshu","anuj"];
var text3 = "";
for(let x of arr1)
{
    text3 += x + "<br>"
}
var head3 = document.getElementById("demo3").innerHTML = text3;

// use for in and of and do question

const number = [10,20,30,40,50];
text4 = "";
for(let x of number)
{
    text4 += x*2 + "<br>";
}
var head4 = document.getElementById("demo4").innerHTML = text4;

