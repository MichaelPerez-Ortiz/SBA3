const startScreen = document.getElementById("start-screen");
const gameScreen = document.querySelector("#game-screen");
const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");
const playerForm = document.getElementById("player-form");
const playerNameInput = document.getElementById("player-name");
const inventoryList = document.getElementById("inventory-list");
const choiceTemplate = document.getElementById("choice-template");

let playerName = "";
let inventory = [];
let currentPosition = "start"

const game = {
    start: {
         text: "You are a member of the Jupiter Military Science Division. It has recently been discovered that your planet is reaching the end of its life. The only way to prevent this is to scour the galaxy in search of new technologies to keep your planet alive. You have been tasked with doing so, do you accept?",

    choices: [
        { text: "Yes", goto: "yes" },
        { text: "No", goto: "examine_start" },
    ]

},

yes: {
    text:"You are now responsible for searching for new advances in technology to help keep our planet alive. You Have seven days to scour the galaxy for a way to save Jupiter.( Hands you the full report) When you are ready go get your ship.",
    choices: [
        { text: "Go to your ship", goto: "ship" },
        { text: "Read the full report", goto: "report" },
    ]
},








};


function resetGame() {
    inventory = [];
    inventoryList.innerHTML = '';
    updateStart('start');
}


playerForm.addEventListener('submit', startGame);

         window.addEventListener('load', () => {
    if (localStorage.getItem('playerName')) {
        playerNameInput.value = localStorage.getItem('playerName');
    }
});


playerNameInput.addEventListener('input', validateName);

function validateName(event) {
        const name = event.target.value;
        const errorDiv = document.querySelector('.error') || document.createElement('div');
        errorDiv.className = 'error';

    if (name.length < 2) {
        errorDiv.textContent = 'Name must be at least 2 characters long';
    if (!document.querySelector('.error')) {
         playerForm.appendChild(errorDiv);
    }
     } else {
         errorDiv.remove();
    }
}

function startGame(event) {
    event.preventDefault();
    playerName = playerNameInput.value;
    localStorage.setItem('playerName', playerName);

        startScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');

    updateStart('start');
}

function updateStart(startId) {
    const start = game[startId];
    currentPosition = startId;

        storyText.textContent = start.text;
        choicesDiv.innerHTML = '';

        
const fragment = document.createDocumentFragment();

start.choices.forEach(choice => {
    if (!choice.requires || inventory.includes(choice.requires)) {
        const choiceBtn = choiceTemplate.content.cloneNode(true).querySelector('button');
        choiceBtn.textContent = choice.text;
        choiceBtn.addEventListener('click', () => {

    if (choice.action) choice.action();
         updateStart(choice.goto);
    });
        fragment.appendChild(choiceBtn);
    }
    });

         choicesDiv.appendChild(fragment);
}

function addToInventory(item) {
    if (!inventory.includes(item)) {
            inventory.push(item);

        const li = document.createElement('li');
        li.textContent = item;

        inventoryList.appendChild(li);
    }
}