//profile images 
const imageLinks = [
    "https://i.pinimg.com/564x/54/72/84/547284e994d2b8937547f3e74070cd46.jpg",
    "https://i.pinimg.com/564x/51/8e/09/518e091f314103c452429370c511f926.jpg",
    "https://i.pinimg.com/564x/09/04/8c/09048c22163ed65e5adff28ba0f87deb.jpg",
    "https://i.pinimg.com/564x/b2/1c/7a/b21c7ab7560f3cfdd4d7f24b68abb9d0.jpg",
    "https://i.pinimg.com/564x/d2/de/a7/d2dea766ea731b85d51b254d2c1f7349.jpg",
    "https://i.pinimg.com/564x/26/3d/fc/263dfc9211070a69c173714a3742c76d.jpg",
    "https://i.pinimg.com/564x/1d/6c/7d/1d6c7de2831b1af320a852d4a02dd7b7.jpg"
];
var profilePic = imageLinks.sort((a,b) => 0.5 - Math.random())[0];
var profileElement = document.querySelector(".image");
profileElement.src = profilePic;

// name generate
const diverseMaleNames = [
    "John Smith",
    "David Johnson",
    "Michael Lee",
    "Robert Martin",
    "William Taylor",
    "James Kim",
    "Daniel Hernandez",
    "Joseph Rodriguez",
    "Charles Patel",
    "Thomas Nguyen",
    "Luis Garcia",
    "Akio Tanaka",
    "Carlos Chavez",
    "Hiroshi Yamamoto",
    "Rahul Gupta",
    "Miguel Lopez",
    "Javier Rodriguez",
  ];
var nameS = diverseMaleNames.sort((a,b) => 0.4 - Math.random())[0];
var nameElement = document.querySelector(".name");
nameElement.textContent = nameS;

// trash talk
const trashTalks = [
    "You must be lucky today!",
    "I'm feeling lucky, are you?",
    "Get ready to lose!",
    "The odds are in my favor.",
    "Better luck next time!",
    "You call that a bet?",
    "I've got a winning streak!",
    "Prepare to be amazed!",
    "You're going down, my friend.",
    "This is where the fun begins!",
];
var trashTalk = trashTalks.sort((a,b) => .4 - Math.random())[0];
var trashTalkElement = document.querySelector(".trash-talk");
trashTalkElement.textContent = trashTalk;