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

}


};


