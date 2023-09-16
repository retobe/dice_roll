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

var playerDiceImgElement = document.querySelector("#dice-img2") 
var personDiceImgElement = document.querySelector("#dice-img") 
var nameElement = document.querySelector(".name");
var imageElement = document.querySelector(".image");
var trashTalkElement = document.querySelector(".trash-talk");
nameElement.textContent = randomPerson.name;
imageElement.src = randomPerson.image;
trashTalkElement.textContent = randomPerson.trashTalk;

// GAME

var personDice;
var playerDice;

function rollDice() {
    playerDice = Math.ceil((Math.random() * 6));
    playerDiceImg = diceImgs[playerDice];
    playerDiceImgElement.src = playerDiceImg
    personDice = Math.ceil((Math.random() * 6));
    personDiceImg = diceImgs[personDice];
    personDiceImgElement.src = personDiceImg
}

rollDice()