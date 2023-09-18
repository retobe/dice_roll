function compareDices() {
  var gameAmount = Math.floor(Math.random() * 1500) + 500;
  var originalMoney = `${gameAmount}`;
  var userMoney = parseInt(getValue("money"));
  gameResult.classList.add("fadeIn");
  var streakBonus = localStorage.getItem("streak_bonus") === null
    ? "false"
    : localStorage.getItem("streak_bonus");
  if (streakBonus === "true") {
    var streak = parseInt(localStorage.getItem("streak"));
  }

  var percentageBoost = localStorage.getItem("percentage_boost") === null
    ? "false"
    : localStorage.getItem("percentage_boost");

  var difference = Math.abs(playerDice - personDice);
  difference *= 10;
  var percentWon = difference + Math.floor(Math.random() * 50) + 1;
  var streakBoostmsg;
  var Percentmsg;
  
  //Player Won
  if (playerDice > personDice) {
    streak += 1;
    if (streakBonus === "true") {
      if (streak > 1) {
        var streakAmount = (Math.floor(Math.random() * 500) + 50) * streak +
          (Math.floor(Math.random() * (streak + 2)) + 1);
        gameAmount += streakAmount;
  
        streakBoostmsg = `<br/>Streak Bonus: $${numberWithCommas(streakAmount)}`;
      }
      localStorage.setItem("streak", streak);
      console.log(streak);
    }
    if (percentageBoost === "true") {
      gameAmount = Math.floor(gameAmount + (percentWon / 100) * gameAmount);
      Percentmsg = `<br/>Percentage Boost: (${percentWon}% boost)`;
    }
    var msg = `You rolled ${playerDice}, ${randomPerson.name} rolled a ${personDice}. You won! +${percentageBoost === "true" || streakBonus === "true" && streak > 1
      ? " (" + originalMoney + " => " + gameAmount + ")"
      : gameAmount}`;
    setValue("money", gameAmount + userMoney);
    trashTalkElement.textContent = randomPerson.lost;
    gameResult.classList.add("won");
    console.log("msg:", msg);
    console.log("percentMsg:", Percentmsg);
    console.log("streakBonus:", streakBonus);
    console.log("streakBoostmsg:", streakBoostmsg);
    console.log("percentageBoost:", percentageBoost);

    gameResult.innerHTML =
      msg +
      (percentageBoost === "true" ? Percentmsg : "") +
      (streakBonus === "true" && streak > 1 ? streakBoostmsg : ""); // MESSAGE RETURNS UNDEFINED. (FIX)
  } else if (playerDice < personDice) { //player lost
    if (streakBonus === "true") {
      streak = 0;
      localStorage.setItem("streak", streak);
    }
    if (gameAmount > userMoney) {
      setValue("money", 0);
    } else {
      setValue("money", userMoney - gameAmount);
    }
    trashTalkElement.textContent = randomPerson.won;
    gameResult.classList.add("lost");
    gameResult.innerHTML = `You rolled ${playerDice}, ${randomPerson.name} rolled a ${personDice}. You lost! -${gameAmount}`;
  } else { // Player tied
    trashTalkElement.textContent = randomPerson.lost;
    gameResult.style.color = "yellow";
    gameResult.innerHTML = "It's a tie!";
  }
}
