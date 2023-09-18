var btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  var item = btn.id;
  if (getValue(item) === "true") {
    btn.classList.add("bought");
    btn.parentNode.parentNode.parentNode.classList.add("boughtP");
    btn.disabled = true;
  } else {
    btn.classList.add("buy");
  }
});

function buy(element) {
  var item = element.id;
  var userMoney = parseInt(getValue("money"));
  var itemPrice = parseInt(element.getAttribute("price"));
  switch (item) {
    case "speed_boost":
      if (userMoney < itemPrice) {
        alert("You don't have enough money to buy this!");
        reload();
      } else {
        setValue("money", userMoney - itemPrice);
        setValue("speed_boost", "true");
        alert(`Successfully bought ${item.replace("_", " ")}`);
        reload();
      }
      break;
    case "percentage_boost":
      if (userMoney < itemPrice) {
        alert("You don't have enough money to buy this!");
        reload();
      } else {
        setValue("money", userMoney - itemPrice);
        setValue("percentage_boost", "true");
        alert(`Successfully bought ${item.replace("_", " ")}`);
        reload();
      }
      break;
    case "streak_bonus":
      if (userMoney < itemPrice) {
        alert("You don't have enough money to buy this!");
        reload();
      } else {
        setValue("money", userMoney - itemPrice);
        setValue("streak_bonus", "true");
        alert(`Successfully bought ${item.replace("_", " ")}.`);
        reload();
      }
    default:
      console.error("Invalid ITEM.ID")
      break;
  }
}
