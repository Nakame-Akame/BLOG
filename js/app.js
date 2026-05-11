const session =
localStorage.getItem("session");

if(session !== "active"){
  window.location.href = "login.html";
}