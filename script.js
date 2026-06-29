function generatePassword() {

    let length = document.getElementById("length").value;

    let upper = document.getElementById("uppercase").checked;
    let lower = document.getElementById("lowercase").checked;
    let number = document.getElementById("numbers").checked;
    let symbol = document.getElementById("symbols").checked;

    if(length < 4 || length > 30){
        alert("Password length should be between 4 and 30.");
        return;
    }

    let chars = "";

    if(upper)
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(lower)
        chars += "abcdefghijklmnopqrstuvwxyz";

    if(number)
        chars += "0123456789";

    if(symbol)
        chars += "!@#$%^&*()_+?><{}[]";

    if(chars === ""){
        alert("Select at least one option.");
        return;
    }

    let password = "";

    for(let i=0;i<length;i++){
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword(){

    let password = document.getElementById("password");

    password.select();
    document.execCommand("copy");

    alert("Password Copied!");
}