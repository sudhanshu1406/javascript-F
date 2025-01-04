function singup(){
    var data = {
        username : document.querySelector("#username").value,
        password : document.querySelector("#password").value
    }

    localStorage.setItem("singupdata",JSON.stringify(data));
}

var local_data = JSON.parse(localStorage.getItem("singupdata"));

function login(){
    let data = {
        usernamelogin : document.getElementById("usernamelogin").value,
        passwordlogin : document.getElementById("passwordlogin").value
    }

    if(local_data.username!=data.usernamelogin || local_data.password!=data.passwordlogin)
    {
        alert("user not found")
        return false;
    }
}