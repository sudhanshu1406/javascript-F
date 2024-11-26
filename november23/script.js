function clickme(){
    alert("button was clicked");
}

var clickbtn = document.getElementById("click")
clickbtn.addEventListener("mouseover",clickme);

// conditional statements

// function validate(){
//     alert("form submited")
// }

function validate(e){
    // to prevent the default behaviour of form submission

    e.preventDefault();

    // fetch input values

    let myname = document.getElementById("name").value;
    let myemail = document.getElementById("email").value;
    let mypass = document.getElementById("pass").value;
    let mycnfpass = document.getElementById("cnfpass").value;

    console.log(myname, myemail, mypass, mycnfpass);

    // check if any field is empty

    if(myname == "" || myemail == "" || mypass == "" || mycnfpass == "")
    {
        alert("all fields are required");
        return false;
    }
    else if(mypass !== mycnfpass)
    {
        alert("password does't match");
        return false;
    }

    alert("form submited successfully")
}
var formsub = document.getElementById("myform");
formsub.addEventListener("submit",validate)