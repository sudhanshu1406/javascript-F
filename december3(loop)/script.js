// loops

// for loop
// write a function to print odd numbers from 1 to 100
// write a function to print even numbers from 1 to 100
function even(){
for(let i=1; i<=100; i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}
}
function odd(){
for(let i=1; i<=100; i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}
}

// while loop
let text = "";
let y = 1;
while(y<=10)
{
    text += `the number is ${y} <br>`;
    ++y;
}
// document.getElementById("demo").innerHTML = text;

// do while
let text1 = "";
let z = 11;
do{
    text += `the number is ${z} <br>`;
}
while(z<=10);

// document.getElementById("demo").innerHTML = text;

// from for loop
let text3 = "";
for(let r=1; r<=5; ++r)
{
    for(let c=1; c<=5; ++c)
    {
        if(c<=r)
        {
            text3 += "*";
        }
        else
        {
            text3 += " ";
        }
    }
    text3 += `<br>`;
}
document.getElementById("demo").innerHTML = text3;

// from while loop
let tri1 = "";
let r = 1;
while(r<=5)
{
    let c = 1;
    while(c<=5)
    {
        if(c>=6-r)
        {
            tri += "*";
        }
        else
        {
            tri += " ";
        }
    }
    tri += `<br>`;
}
document.getElementById("demo").innerHTML = tri;
