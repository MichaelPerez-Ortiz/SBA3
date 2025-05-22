const startScreen = document.getElementById("start-screen");
const gameScreen = document.querySelector("#game-screen");
const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");
const playerForm = document.getElementById("player-form");
const playerNameInput = document.getElementById("player-name");
const inventoryList = document.getElementById("inventory-list");
const choiceTemplate = document.getElementById("choice-template");

//InitialState
let playerName = "";
let inventory = [];
let currentPosition = "start"


//Story
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

report: {
    text: "You decide it's best to read the report before leaving. It reads ( We have recently dicovered that Jupiter is nearing the end of its life cycle luckily we have discovered that there may be some new technology located on other planets that we have yet to discover. You are to go to these other planets and look for anything that might be of use to us. We have not been able to pinpoint an exact location but it seems that Neptune may be the most technologically advanced planet in this system.",

    choices: [
        {text: "Go to your ship", goto: "ship"},
    ]
},

ship: {
    text: "You go to your ship and prepare for departure there is a map inside when three planets circled Neptune, Venus and Earth. These are the planets that show the most promise. Where will you look first? Keep in mind that it will take a certain amount of time to reach each planet. ( 1- Venus 2- Earth 3- Neptune and the same amount to get back)",

    choices: [
        { text: "Venus", goto: "venus1"},
        { text: "Earth", goto: "earth1"},
        { text: "Neptune", goto: "neptune1" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},

//End
neptune1: {
    text: "You reach Neptune and are amazed. It looks like a Metropolis, the city is not on the ground but hovering above it. This planet shows great promise. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and give you an older model of their technology. You have completed your mission and have returned to Jupiter with the new technology. The scientists quickly begin work on saving their planet.", 
    choices: [

        { text: "Your name will go down in History." , goto: "start", action: () => resetGame()},
    ]
},

earth1: {
    text: "	You decide to travel to planet Earth. Upon first glance you see great promise as Earth looks very similar to your home back on Jupiter. Perhaps they have found a way to extend the life of their planet, then again maybe their in the same situation as us. Will you Stay or will yo go? ( You are on your second day)",
    choices: [
        { text: "Stay On Earth", goto: "stayEarth" },//Leads to End
        { text: "Go to Venus", goto: "venus2" },
        { text: "Go to Neptune", goto: "neptuneEarth" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},


//End
neptuneEarth: {
    text: "You decide to leave Earth and go to Neptune. Upon reaching Neptune you are amazed. It looks like a Metropolis, the city is not on the ground but hovering above it. This planet shows great promise. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and give you an older model of their technology. You have completed your mission and have returned to Jupiter with the new technology. The scientists quickly begin work on saving their planet.",
    choices: [

        { text: "Your name will go down in History." , goto: "start", action: () => resetGame()},
    ]
},

//End
stayEarth: {
    text: "You stay on Earth searching for a way to save your planet. You search all day and night but find nothing. The people of Earth have not come across this problem and therefore have not had to search for a solution. Unfortunatley You don't have enough time to search another planet and return to Jupiter. Your planet is no more and you must start a new life. You stay on Earth going about your days never forgetting all of the people you let down.",
    choices: [

        { text: "...." , goto: "start", action: () => resetGame()},
    ]
},

venus2: {
    text: "	You decide to go to Venus takes you a total of one day to reach your destination. Upon landing you see that the trip was a complete waste of time. The scans must have been off, the planet is nothing more than a giant desert. Will you spend a day to search the planet or will you go to another planet.",
    choices: [
        { text: "Continue searching Venus", goto: "searchVenus" },
        { text: "Travel to Neptune", goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},

searchVenus: {
    text: "You decide to stay on Venus. You spend the rest of your day searching through the desert, you begin to question whether you should have ever landed. Will you leave now before the day is up or will you search through the night.",
    choices: [
        { text: "Continue Searching", goto: "searchVenus2" },
        { text: "Travel to Neptune", goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},

searchVenus2: {
    text: "You continue searching Venus throughout the night, it is getting cold and you are about to give up when you stumble across something. You look down and you see something that resembles a highly advanced piece of machinery, yet it looks oddly familiar. You pick it up and hurry back to your ship for analysis. It is a turbo booster with this you'll be able to travel to the other planets in half the time it would normally take. Unfortunately this is not what you are looking for where will you go now?",
    choices: [
        { text: "Travel to Neptune", goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ],
},


//End
neptune2: {
text: "You reach Neptune and are amazed. It looks like a Metropolis, the city is not on the ground but hovering above it. This planet shows great promise. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and give you an older model of their technology. You have completed your mission and have returned to Jupiter with the new technology. The scientists quickly begin work on saving their planet.Your name will go down in History.",
    choices: [

        { text: "Your name will go down in History." , goto: "start", action: () => resetGame()},
    ]
},


venus1: {
    text: "You decide to go to Venus first it takes you a total of one day to reach your destination. Upon landing you see that the trip was a complete waste of time. The scans must have been off, the planet is nothing more than a giant desert. Will you spend a day to search the planet or will you go to another planet.",
    choices: [
        { text: "Search Venus", goto: "venus1Search" },
        { text: "Travel to Earth", goto: "earth2" },
        { text: "Travel to Neptune", goto: "neptune2" },//Leads to End
    ]
},

earth2: {

    text: "You decide to travel to planet Earth. Upon first glance you see great promise as Earth looks very similar to your home back on Jupiter. Perhaps they have found a way to extend the life of their planet, then again maybe their in the same situation as us. Will you Stay or will yo go?(It is now day three)",
    choices: [
        { text: "Search Earth", goto: "stayEarth" },//Leads to End
        { text: "To Neptune", goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ],
},

venus1Search: {
    text: "You decide to stay on Venus. You spend the rest of your day searching through the desert, you begin to question whether you should have ever landed. Will you leave now before the day is up or will you search through the night.",
    choices: [
        { text: "Search through the night", goto: "venus1SeacrhNight" },
        { text: "Travel to Earth", goto: "earth3" },
        { text: "Travel to Neptune", goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},


earth3: {

    text: " Finding nothing, you decide to rush to planet Earth with hope in your heart. It is almost day four. Things are looking up. Upon first glance, you see great promise as the Earth looks very similar to your home back in Jupiter. Perhaps they have found a way to extend the life of their planet, then again maybe they are in the same situation as us. Will you stay or will you go?",
    choices: [
        { text: "Stay on Earth", goto: "stayEarth1" },
        { text: "To Neptune", goto: "neptune3" , action: () => addToInventory("Advanced technology")},//Leads to End
    ],
},

neptune3: {

    text: "You decide not to take the risk. It will be close but there's still time. You reach Neptune and are amazed. It looks like a Metropolis, the city is not on the ground but hovering above it. This planet shows great promise. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and give you an older model of their technology. You have completed your mission and have returned to Jupiter with the new technology. The scientists quickly begin work on saving their planet.",
	choices: [
        { text: "But it is not fast enough" , goto: "quiet"}
    ]
},


//End
quiet: {
    choices: [
        { text: "Quiet" , goto: "start", action: () => resetGame()},
    ]
},


stayEarth1: {

    text: "Your hope was misguided. The people of Earth have not come across this problem and therefore have not had to search for a solution. This was a wasted trip. It will be close but there's still time. Neptune is the answer it has to be. You rush to your ship and travel to Neptune.",
    choices: [
        { text: "It's beautiful", goto: "neptune4" , action: () => addToInventory("Advanced technology")},
    ],
},

neptune4: {

    text: "Neptune is a Metropolis, the city is not on the ground but hovering above it. This is it. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and give you an older model of their technology. You have completed your mission and hurry to return to Jupiter with the new technology.",
    choices: [
        { text: "A flash and a deafening ringing in your ear.", goto: "destroyed" },
    ],
},

destroyed: {
    text: "You were too late. The shockwave ripples through your ship stopping you in your tracks. Jupiter is in pieces your home is no more. What will you do now?",
    choices: [
        { text: "Find a new home on Neptune." , goto: "neptuneHome"}//Expand on later but all choices will lead to an ending
    ]
},


//End
neptuneHome: {

    text: "With nowhere to call home you return to Neptune. Maybe you can begin anew. You are greeted by Neptunes diplomats they saw the explosion everyone did. Not a star in the universe could have missed it. They offer you a home a chance to start over a chance to run away from your failure",
    choices: [
        { text: "You accept." , goto: "start", action: () => resetGame()}
    ]
},

venus1SearchNight: {
    text: "You continue searching Venus throughout the night, it is getting cold and you are about to give up when you stumble across something. You look down and you see something that resembles a highly advanced piece of machinery, yet it looks oddly familiar. You pick it up and hurry back to your ship for analysis. It is a turbo booster with this you'll be able to travel to the other planets in half the time it would normally take. Unfortunately this is not what you are looking for where will you go now?",
    choices: [
        { text: "To Earth" , goto: "earthFast"},
        { text: "To Neptune" , goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},

earthFast: {
    text: "You decide to travel to planet Earth. Thanks to your turbo booster you have made it in one day. Upon first glance you see great promise as Earth looks very similar to your home back on Jupiter. Perhaps they have found a way to extend the life of their planet, then again maybe their in the same situation as us. Will you Stay or will you go? (You are on your second day)",
    choices: [
        { text: "Search Earth" , goto: "earthFastEnd" , action: () => addToInventory("Advanced technology")},//Leads to End}
        { text: "Go to Neptune" , goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},


//End
earthFastEnd: {
    text: "You stay on Earth searching for a way to save your planet. You search all day and night but find nothing. The people of Earth have not come across this problem and therefore have not had to search for a solution. This was a wasted trip." + "You return to your ship and travel to Neptune.(You are on Your third day)You reach Neptune and are amazed. It looks like a Metropolis the city is not on the ground but hovering above it. This planet shows great promise. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and gives you an older model of their technology. You have completed your mission and have returned to Jupiter with the new technology. The scientist quickly begin work on saving their planet.",
    choices: [

        { text: "Your name will go down in History." , goto: "start", action: () => resetGame()},
    ]
},

};

//CoreFunctions


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