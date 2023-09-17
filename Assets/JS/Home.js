setValues();
displayPlayer();
const person1 = {
    name: "John Smith",
    trashTalk: "You think you can beat me? I've been rolling dice since before you were born!",
    image: "https://i.pinimg.com/564x/df/11/28/df11287e5e7dec8a886b4a9f7cb6445f.jpg",
    won: "Haha! I'm the dice-rolling champ!",
    lost: "Damn it! You got lucky this time.",
};

const person2 = {
    name: "David Johnson",
    trashTalk: "Luck is a fickle mistress, my friend, and today she's on my side.",
    image: "https://i.pinimg.com/564x/51/8e/09/518e091f314103c452429370c511f926.jpg",
    won: "Haha! Luck was on my side!",
    lost: "Damn it! Luck wasn't with me this time.",
};

const person3 = {
    name: "Michael Lee",
    trashTalk: "Get ready for a lesson in dice-rolling excellence!",
    image: "https://i.pinimg.com/736x/51/20/06/51200671de062fe0d2df9b102385e688.jpg",
    won: "Haha! Did you see that roll? I'm unstoppable!",
    lost: "Damn it! That roll wasn't in my favor.",
};

const person4 = {
    name: "Robert Martin",
    trashTalk: "In this game, there are winners and there are the ones who wish they were winners. Which one are you?",
    image: "https://i.pinimg.com/564x/5a/aa/5a/5aaa5ace1ad94bb8a06169b7b27ddfc2.jpg",
    won: "Haha! I'm the true winner of this game!",
    lost: "Damn it! I'll come back stronger next time.",
};

const person5 = {
    name: "Oluwafemi Adeyemi",
    trashTalk: "I hope you've been practicing, because you're about to witness the art of dice mastery.",
    image: "https://i.pinimg.com/564x/d2/de/a7/d2dea766ea731b85d51b254d2c1f7349.jpg",
    won: "Haha! I'm the dice-rolling master!",
    lost: "Damn it! You got the best of me this time.",
};

const person6 = {
    name: "James Kim",
    trashTalk: "Luck favors the bold, and I'm feeling exceptionally bold today.",
    image: "https://i.pinimg.com/564x/26/3d/fc/263dfc9211070a69c173714a3742c76d.jpg",
    won: "Haha! Boldness pays off, I'm the winner!",
    lost: "Damn it! Luck wasn't on my side.",
};

const person7 = {
    name: "Daniel Hernandez",
    trashTalk: "I can hear the dice calling my name. Can you hear them calling yours?",
    image: "https://i.pinimg.com/564x/34/64/ad/3464ad1c33c983b87d66f14b092f11ee.jpg",
    won: "Haha! The dice spoke my name, I'm victorious!",
    lost: "Damn it! I'll roll better next time.",
};

var dice1 = "./Assets/images/dice-1.png"
var dice2 = "./Assets/images/dice-2.png"
var dice3 = "./Assets/images/dice-3.png"
var dice4 = "./Assets/images/dice-4.png"
var dice5 = "./Assets/images/dice-5.png"
var dice6 = "./Assets/images/dice-6.png"
var diceImgs = [null, dice1, dice2, dice3, dice4, dice5, dice6];
var playerDiceImg;
var personDiceImg;

const people = [person1, person2, person3, person4, person5, person6, person7];

// Shuffle the array function using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the array of person objects
shuffleArray(people);

// Retrieve one randomly shuffled person object
const randomPerson = people[Math.floor(Math.random() * people.length)];

var gameResult = document.querySelector("#game_result");
var playerDiceImgElement = document.querySelector("#dice-img2")
var personDiceImgElement = document.querySelector("#dice-img")
var startBtn = document.querySelector(".start-btn");
var restartBtn = document.querySelector(".restart-btn");
playerDiceImgElement.style.display = "none";
personDiceImgElement.style.display = "none";

//person elements
var nameElement = document.querySelector(".name");
var imageElement = document.querySelector(".image");
var trashTalkElement = document.querySelector(".trash-talk");
nameElement.textContent = randomPerson.name;
imageElement.src = randomPerson.image;
trashTalkElement.textContent = randomPerson.trashTalk;

// GAME

var personDice;
var playerDice;
var timeOut = 5000;
function rollDice() {
    startBtn.style.display = "none";
    playerDice = Math.ceil((Math.random() * 6));
    playerDiceImg = diceImgs[playerDice];
    playerDiceImgElement.src = playerDiceImg
    personDice = Math.ceil((Math.random() * 6));
    personDiceImg = diceImgs[personDice];
    personDiceImgElement.src = personDiceImg;
    var speedBoost = localStorage.getItem("speed_boost") === null ? "false" : localStorage.getItem("speed_boost");


    // Set the default animation duration
    var animationDuration = "3s";

    // If the user has speed_boost, reduce the animation duration to 1s
    if (speedBoost === "true") {
        animationDuration = "1s";
    }

    // Set a timeout to run the animation after 1 second (1000 milliseconds)
    setTimeout(() => {
        // Set the animation duration for personDiceImgElement
        personDiceImgElement.style.animationDuration = animationDuration;

        // Add the fadeIn class to personDiceImgElement
        personDiceImgElement.classList.add("fadeIn");

        // Display personDiceImgElement
        personDiceImgElement.style.display = "flex";

        // Set the animation duration for playerDiceImgElement
        playerDiceImgElement.style.animationDuration = animationDuration;

        // Add the fadeIn class to playerDiceImgElement
        playerDiceImgElement.classList.add("fadeIn");

        // Display playerDiceImgElement
        playerDiceImgElement.style.display = "flex";

        // Call compareDices and restartBtn animations after the appropriate timeout
        compareDices();
        setTimeout(() => {
            restartBtn.classList.add("fadeIn");
            restartBtn.style.display = "inline";
        }, speedBoost === "true" ? 500 : 5000); // Use 500ms timeout if speed_boost is true, else 1000ms
    }, 1000);
}

function compareDices() {
    var gameAmount = Math.floor(Math.random() * 1500) + 500;
    var userMoney = parseInt(getValue("money"));
    gameResult.classList.add("fadeIn");
    var percentageBoost = localStorage.getItem("percentage_boost") === null ? "false" : localStorage.getItem("percentage_boost");

    var difference = Math.abs(playerDice - personDice);
    difference *= 10
    var percentWon = difference + Math.floor(Math.random() * 50) + 1;
    console.log(gameAmount)
    if (playerDice > personDice) {
        if (percentageBoost === "true") {
            gameAmount = Math.floor(gameAmount + (percentWon / 100 * gameAmount));
            console.log(gameAmount)
        }
        setValue("money", gameAmount + userMoney);
        trashTalkElement.textContent = randomPerson.lost;
        gameResult.classList.add("won");
        gameResult.innerHTML = `You rolled ${playerDice}, ${randomPerson.name} rolled a ${personDice}. You won! +${gameAmount} (${percentWon}% boost)`;
    } else if (playerDice < personDice) {
        if (gameAmount > userMoney) {
            setValue("money", 0);
        } else {
            setValue("money", userMoney - gameAmount);
        }
        trashTalkElement.textContent = randomPerson.won;
        gameResult.classList.add("lost");
        gameResult.innerHTML = `You rolled ${playerDice}, ${randomPerson.name} rolled a ${personDice}. You lost! -${gameAmount}`;
    } else {
        trashTalkElement.textContent = randomPerson.lost;
        gameResult.style.color = "yellow";
        gameResult.innerHTML = "It's a tie!";
    }
}