let username = document.querySelector("#username");
let password = document.querySelector("#password");
let login = document.querySelector("#login");

function empty(message){
    let mustbefilled = document.querySelector(".mustfilled");
    mustbefilled.setAttribute('id', 'wrong-pass');
    const value = document.createTextNode(message);
    mustbefilled.appendChild(value)
}

function passlength(message1){
    let plength = document.querySelector(".passlength");
    plength.setAttribute('id', 'length-pass');
    const value1 = document.createTextNode(message1);
    plength.appendChild(value1);
}

login.addEventListener("click", () => {
    if(username.value == "" && password.value == ""){
       empty("Must be filled");
    }else if(password.value.length < 5){
      passlength("Password is at least 5 characters!");
    }else if(password.value.length >= 5){
        window.location.replace("home.html");
    }
});
