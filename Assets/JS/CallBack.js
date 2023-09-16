
function setValues() {
  var userMoney = localStorage.getItem("money") === null ? 0 : localStorage.getItem("money");
  var userPfp = localStorage.getItem("userPfp") === null ? "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png" : localStorage.getItem("userPfp");
  var userName = localStorage.getItem("userName") === null ? "You" : localStorage.getItem("userName");
  var userTrashtalk = localStorage.getItem("userTrash") === null ? "imma gonna lose cuz i suck." : localStorage.getItem("userTrash");
  localStorage.setItem("money", userMoney);
  localStorage.setItem("userPfp", userPfp);
  localStorage.setItem("userName", userName);
  localStorage.setItem("userTrash", userTrashtalk);
}

function displayPlayer() {
  var playerName = document.querySelector(".player .name");
  var playerPfp = document.querySelector(".player .image");
  var playerTrash = document.querySelector(".player .trash-talk");
  var playerLocalPfp = localStorage.getItem("userPfp");
  playerName.textContent = localStorage.getItem("userName");
  playerPfp.src = playerLocalPfp;
  playerTrash.textContent = localStorage.getItem("userTrash");
}