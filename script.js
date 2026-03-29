let result = document.getElementById("result");
let strength = document.getElementById("strength");

function generatePassword(){

let length = document.getElementById("length").value;

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

let password = "";

for(let i=0;i<length;i++){

let random = Math.floor(Math.random()*chars.length);

password += chars[random];

}

result.textContent = password;

checkStrength(password);
}

function checkStrength(password){

if(password.length < 6){
strength.textContent = "Weak Password";
strength.style.color = "red";
}
else if(password.length < 10){
strength.textContent = "Medium Password";
strength.style.color = "orange";
}
else{
strength.textContent = "Strong Password";
strength.style.color = "green";
}

}

function savePassword(){

let name = document.getElementById("name").value;

let password = result.textContent;

if(name === "" || password === ""){

alert("Enter name and generate password");

return;

}

localStorage.setItem(name,password);

alert("Password Saved");

}

function findPassword(){

let searchName = document.getElementById("searchName").value;

let password = localStorage.getItem(searchName);

if(password){

document.getElementById("foundPassword").textContent =
"Password: " + password;

}
else{

document.getElementById("foundPassword").textContent =
"No password found";

}

}