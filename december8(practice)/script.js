var heading = document.getElementById("demo");

function show(){
    var number = document.getElementById("input").value;
    if(number%2==0)
    {
        alert("even number");
    }
    else
    {
        alert("odd number");
    }
}

// const array1 = [11,2,3,43,23,5]

// array1.forEach(maxi)
// function maxi(){
//     heading.innerHTML = Math.max(array1)
// }


const array2 = [1,2,34,5,6,33];

array2.forEach(sum)
function sum(){
    let text = 0;
    for(let x of array2)
    {
        heading.innerHTML = text = text + x;
    }
}

var password;
for(let x=1; x<=10; ++x)
{
    password = Math.random(x)+1;
}
console.log(password);


