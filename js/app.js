const session =
localStorage.getItem("session");

if(session !== "active"){
  window.location.href = "login.html";
}
const darkModeBtn =
document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

});