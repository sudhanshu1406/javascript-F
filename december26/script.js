var data = {
    name:"sudhanshu",
    age:19,
    city:"indore"
};

localStorage.setItem("newdata",JSON.stringify(data));
var finaldata = JSON.parse(localStorage.getItem('newdata'));
console.log(finaldata);