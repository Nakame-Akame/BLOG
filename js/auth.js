const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

if(username === "" || password === ""){
alert("Complete los campos");
return;
}

const user = {
username,
password
};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Usuario registrado");

window.location.href = "login.html";

});

}
const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const username =
document.getElementById("loginUser").value;

const password =
document.getElementById("loginPass").value;

const savedUser =
JSON.parse(localStorage.getItem("user"));

if(
savedUser &&
savedUser.username === username &&
savedUser.password === password
){

localStorage.setItem(
"session",
"active"
);

window.location.href = "index.html";

}else{

alert("Credenciales incorrectas");

}

});

}
const logoutBtn =
document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",()=>{

localStorage.removeItem("session");

window.location.href = "login.html";

});

}