
function setValues() {
  var userMoney = localStorage.getItem("money") === null || localStorage.getItem("money") < 0 ? 0 : localStorage.getItem("money");
  var userPfp = localStorage.getItem("userPfp") === null ? "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png" : localStorage.getItem("userPfp");
  var userName = localStorage.getItem("userName") === null ? "You" : localStorage.getItem("userName");
  var userTrashtalk = localStorage.getItem("userTrash") === null ? "imma gonna lose cuz i suck." : localStorage.getItem("userTrash");
  if (localStorage.getItem("streak_bonus") != "false" && localStorage.getItem("streak") === null) {
    localStorage.setItem("streak", 0);
  }
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

function getValue(value_name) {
  return localStorage.getItem(value_name);
}

function setValue(value_name, value_amount) {
  return localStorage.setItem(value_name, value_amount);
}

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function reload() {
  return location.reload()
}