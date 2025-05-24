const startScreen = document.getElementById("start-screen");
const gameScreen = document.querySelector("#game-screen");
const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");
const playerForm = document.getElementById("player-form");
const playerNameInput = document.getElementById("player-name");
const inventoryList = document.getElementById("inventory-list");
const choiceTemplate = document.getElementById("choice-template");
const inventorySection = document.querySelector(".inventory");
const gameContainer = document.querySelector(".game-container");



//InitialState
let playerName = "";
let inventory = [];
let currentPosition = "start"


//Story
const game = {

start: {
    text: "You are a member of the Jupiter Military Science Division. It has recently been discovered that your planet is reaching the end of its life. The only way to prevent this is to scour the galaxy in search of new technologies to keep your planet alive. You have been tasked with doing so, do you accept?",

    choices: [
        { text: "[ [ Yes ] ]", goto: "yes" },
        { text: "[ [ No ] ]", goto: "no" },
    ]
 },

yes: {
    text:"You are now responsible for searching for new advances in technology to help keep our planet alive. You Have seven days to scour the galaxy for a way to save Jupiter.( Hands you the full report) When you are ready go get your ship.",
    choices: [
        { text: "[ [ Go to your ship ]]", goto: "ship" },
        { text: "[ [ Read the full report ] ]", goto: "report" },
    ]
},

report: {
    text: "You decide it's best to read the report before leaving. It reads ( We have recently dicovered that Jupiter is nearing the end of its life cycle luckily we have discovered that there may be some new technology located on other planets that we have yet to discover. You are to go to these other planets and look for anything that might be of use to us. We have not been able to pinpoint an exact location but it seems that Neptune may be the most technologically advanced planet in this system.",

    choices: [
        {text: "[ [ Go to your ship ]]", goto: "ship"},
    ]
},

ship: {
    text: "You go to your ship and prepare for departure there is a map inside when three planets circled Neptune, Venus and Earth. These are the planets that show the most promise. Where will you look first? Keep in mind that it will take a certain amount of time to reach each planet. ( 1- Venus 2- Earth 3- Neptune and the same amount to get back)",

    choices: [
        { text: "[ [ Venus ] ]", goto: "venus1"},
        { text: "[ [ Earth ] ]", goto: "earth1"},
        { text: "[ [ Neptune ] ]", goto: "neptune1" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},

//End
neptune1: {
    text: "You reach Neptune and are amazed. It looks like a Metropolis, the city is not on the ground but hovering above it. This planet shows great promise. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and give you an older model of their technology. You have completed your mission and have returned to Jupiter with the new technology. The scientists quickly begin work on saving their planet.", 
    choices: [

        { text: "[ [ Your name will go down in History ] ]" , action: () => resetGame() , requires: "Advanced technology"},
    ]
},

earth1: {
    text: "	You decide to travel to planet Earth. Upon first glance you see great promise as Earth looks very similar to your home back on Jupiter. Perhaps they have found a way to extend the life of their planet, then again maybe their in the same situation as us. Will you Stay or will yo go? ( You are on your second day)",
    choices: [
        { text: "[ [ Stay On Earth ] ]", goto: "stayEarth" },//Leads to End
        { text: "[ [ Go to Venus ] ]", goto: "venus2" },
        { text: "[ [ Go to Neptune ] ]", goto: "neptuneEarth" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},


//End
neptuneEarth: {
    text: "You decide to leave Earth and go to Neptune. Upon reaching Neptune you are amazed. It looks like a Metropolis, the city is not on the ground but hovering above it. This planet shows great promise. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and give you an older model of their technology. You have completed your mission and have returned to Jupiter with the new technology. The scientists quickly begin work on saving their planet.",
    choices: [

        { text: "[ [ Your name will go down in History ] ]" , action: () => resetGame() , requires: "Advanced technology"},
    ]
},

//End
stayEarth: {
    text: "You stay on Earth searching for a way to save your planet. You search all day and night but find nothing. The people of Earth have not come across this problem and therefore have not had to search for a solution. Unfortunatley You don't have enough time to search another planet and return to Jupiter. Your planet is no more and you must start a new life. You stay on Earth going about your days never forgetting all of the people you let down.",
    choices: [

        { text: "...." , action: () => resetGame()},
    ]
},

venus2: {
    text: "	You decide to go to Venus takes you a total of one day to reach your destination. Upon landing you see that the trip was a complete waste of time. The scans must have been off, the planet is nothing more than a giant desert. Will you spend a day to search the planet or will you go to another planet.",
    choices: [
        { text: "[ [ Continue searching Venus ] ]", goto: "searchVenus" },
        { text: "[ [ Travel to Neptune ] ]", goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},

searchVenus: {
    text: "You decide to stay on Venus. You spend the rest of your day searching through the desert, you begin to question whether you should have ever landed. Will you leave now before the day is up or will you search through the night.",
    choices: [
        { text: "[ [Continue Searching] ]", goto: "searchVenus2" , action: () => addToInventory("Turbo Booster")},
        { text: "[ [ Travel to Neptune ] ]", goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},

searchVenus2: {
    text: "You continue searching Venus throughout the night, it is getting cold and you are about to give up when you stumble across something. You look down and you see something that resembles a highly advanced piece of machinery, yet it looks oddly familiar. You pick it up and hurry back to your ship for analysis. It is a turbo booster with this you'll be able to travel to the other planets in half the time it would normally take. Unfortunately this is not what you are looking for where will you go now?",
    choices: [
        { text: "[ [ Travel to Neptune ] ]", goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ],
},


//End
neptune2: {
text: "You reach Neptune and are amazed. It looks like a Metropolis, the city is not on the ground but hovering above it. This planet shows great promise. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and give you an older model of their technology. You have completed your mission and have returned to Jupiter with the new technology. The scientists quickly begin work on saving their planet.Your name will go down in History.",
    choices: [

        { text: "[ [ Your name will go down in History ] ]" , action: () => resetGame() , requires: "Advanced technology"},
    ]
},


venus1: {
    text: "You decide to go to Venus first it takes you a total of one day to reach your destination. Upon landing you see that the trip was a complete waste of time. The scans must have been off, the planet is nothing more than a giant desert. Will you spend a day to search the planet or will you go to another planet.",
    choices: [
        { text: "[ [ Search Venus ] ]", goto: "venus1Search" },
        { text: "[ [ Travel to Earth ] ]", goto: "earth2" },
        { text: "[ [ Travel to Neptune ] ]", goto: "neptune2" },//Leads to End
    ]
},

earth2: {

    text: "You decide to travel to planet Earth. Upon first glance you see great promise as Earth looks very similar to your home back on Jupiter. Perhaps they have found a way to extend the life of their planet, then again maybe their in the same situation as us. Will you Stay or will yo go?(It is now day three)",
    choices: [
        { text: "[ [ Search Earth ] ]", goto: "stayEarth" },//Leads to End
        { text: "[ [ To Neptune ] ]", goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ],
},

venus1Search: {
    text: "You decide to stay on Venus. You spend the rest of your day searching through the desert, you begin to question whether you should have ever landed. Will you leave now before the day is up or will you search through the night.",
    choices: [
        { text: "[ [ Search through the night ] ]", goto: "venus1SearchNight" , action: () => addToInventory("Turbo Booster")},
        { text: "[ [ Travel to Earth ] ]", goto: "earth3" },
        { text: "[ [Travel to Neptune] ]", goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},


earth3: {

    text: " Finding nothing, you decide to rush to planet Earth with hope in your heart. It is almost day four. Things are looking up. Upon first glance, you see great promise as the Earth looks very similar to your home back in Jupiter. Perhaps they have found a way to extend the life of their planet, then again maybe they are in the same situation as us. Will you stay or will you go?",
    choices: [
        { text: "[ [ Stay on Earth ] ]", goto: "stayEarth1" },
        { text: "[ [ To Neptune ] ]", goto: "neptune3" , action: () => addToInventory("Advanced technology")},//Leads to End
    ],
},

neptune3: {

    text: "You decide not to take the risk. It will be close but there's still time. You reach Neptune and are amazed. It looks like a Metropolis, the city is not on the ground but hovering above it. This planet shows great promise. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and give you an older model of their technology. You have completed your mission and have returned to Jupiter with the new technology. The scientists quickly begin work on saving their planet.",
	choices: [
        { text: "[ [ But it is not fast enough ] ]" , goto: "quiet" , requires: "Advanced technology"},
    ]
},


//End
quiet: {
    text:"",
    choices: [
        { text: "[ [ Quiet ] ]" , action: () => resetGame()},
    ]
},


stayEarth1: {

    text: "Your hope was misguided. The people of Earth have not come across this problem and therefore have not had to search for a solution. This was a wasted trip. It will be close but there's still time. Neptune is the answer it has to be. You rush to your ship and travel to Neptune.",
    choices: [
        { text: "[ [ It's beautiful ] ]", goto: "neptune4" , action: () => addToInventory("Advanced technology")},
    ],
},

neptune4: {

    text: "Neptune is a Metropolis, the city is not on the ground but hovering above it. This is it. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and give you an older model of their technology. You have completed your mission and hurry to return to Jupiter with the new technology.",
    choices: [
        { text: "[ [ A flash and a deafening ringing in your ear ] ]", goto: "destroyed" , requires: "Advanced technology" },
    ],
},

destroyed: {
    text: "You were too late. The shockwave ripples through your ship stopping you in your tracks. Jupiter is in pieces your home is no more. What will you do now?",
    choices: [
        { text: "[ [ Find a new home on Neptune ] ]" , goto: "neptuneHome"}//Expand on later but all choices will lead to an ending
    ]
},


//End
neptuneHome: {

    text: "With nowhere to call home you return to Neptune. Maybe you can begin anew. You are greeted by Neptunes diplomats they saw the explosion everyone did. Not a star in the universe could have missed it. They offer you a home a chance to start over a chance to run away from your failure",
    choices: [
        { text: "[ [ You accept. ] ]" , action: () => resetGame()}
    ]
},

venus1SearchNight: {
    text: "You continue searching Venus throughout the night, it is getting cold and you are about to give up when you stumble across something. You look down and you see something that resembles a highly advanced piece of machinery, yet it looks oddly familiar. You pick it up and hurry back to your ship for analysis. It is a turbo booster with this you'll be able to travel to the other planets in half the time it would normally take. Unfortunately this is not what you are looking for where will you go now?",
    choices: [
        { text: "[ [ To Earth ] ]" , goto: "earthFast" , requires: "Turbo Booster"},
        { text: "[ [ To Neptune ] ]" , goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},

earthFast: {
    text: "You decide to travel to planet Earth. Thanks to your turbo booster you have made it in one day. Upon first glance you see great promise as Earth looks very similar to your home back on Jupiter. Perhaps they have found a way to extend the life of their planet, then again maybe their in the same situation as us. Will you Stay or will you go? (You are on your second day)",
    choices: [
        { text: "[ [ Search Earth ] ]" , goto: "earthFastEnd" , action: () => addToInventory("Advanced technology")},//Leads to End}
        { text: "[ [ Go to Neptune ] ]" , goto: "neptune2" , action: () => addToInventory("Advanced technology")},//Leads to End
    ]
},


//End
earthFastEnd: {
    text: "You stay on Earth searching for a way to save your planet. You search all day and night but find nothing. The people of Earth have not come across this problem and therefore have not had to search for a solution. This was a wasted trip." + "You return to your ship and travel to Neptune.(You are on Your third day)You reach Neptune and are amazed. It looks like a Metropolis the city is not on the ground but hovering above it. This planet shows great promise. You land your ship on the nearest landing pad where you are greeted by armed soldiers. They see you as an intruder. You quickly explain your situation and are escorted to their laboratories where they explain the science behind their discoveries and gives you an older model of their technology. You have completed your mission and have returned to Jupiter with the new technology. The scientist quickly begin work on saving their planet.",
    choices: [

        { text: "[ [ Your name will go down in History ] ]" , action: () => resetGame() , requires: "Advanced technology"},
    ]
},


//No Path Stay

no: {
    text: "Since you have not accepted this assignment you are now assigned an even more daunting task. This is a classified mission you along with a few others are aware of what is in this folder. ( Hands you the folder) Word must not reach the public. We are currently being invaded by an unknown species. You are to join the others in the briefing room after reading the full report. Good luck soldier. (The officer salutes you) ( You are now alone what do you do?)",
    choices: [
        {text: "[ [ Read the Report ] ]" , goto: "noReport"},
        {text: "[ [ Go to the briefing room ] ]" , goto: "brief"},
        {text: "[ [ Run away ] ]" , goto: "run"},
    ]
},
noReport: {
    text: "For over two years we have been secretly fending off an alien invasion from a previously undiscovered alien species. The species looks almost human. It seems to contain an exoskeleton, but they are exposed on their lower back. Thats where you hit them. ",
    choices: [
        {text: "[ [ Go to the briefing room ] ]" , goto: "brief" , action: () => addToInventory("Rifle")},
        {text: "[ [ Run away ] ]" , goto: "run"},
    ]
},

brief: {
    text: "You go to the briefing room where the instructor splits you into teams and sends you to your positions.",
    choices: [
        {text: " - 3 Years Later -" , goto: "year3"},
    ]
},

year3: {
    text: "Since you have been part of this war, you have seen no action. You are the militaries hind legs. You spend all of your time at the back. It's where you eat where you sleep and where you live. You have some time to waste what will you do?",
    choices: [
        {text: "[ [ Spend time with your comrades ] ]" , goto: "comrades"},
        {text: "[ [ Target practice ] ]" , goto: "targetP1"},
        {text: "[ [ Get some rest ] ]" , goto: "rest1"},
    ]
},

comrades: {
    text: "You and your fellow soldiers spend the day playing games and having fun there wasn't a moment of silence.",
    choices: [
        {text: "- 1 Year Later -" , goto: "year4"},
    ]
},

targetP1: {
    text: "You go to the shooting range. You're the only one there. You spend the rest of the day there. You can feel that your aim has improved.",
    choices: [
       {text: "- 1 Year Later -" , goto: "year4"},
    ]
},

rest1: {
    text: "You go to sleep early. The night flys by.",
    choices: [
        {text: "- 1 Year Later -" , goto: "year4"},
    ]
},

year4: {
    text: "Although you have yet to see the enemy or any signs of a fight it is the only thing that you hear. Sounds of laughter are drowned out by screams of pain and suffering. You see the look of fear taking over the faces of your fellow soldiers.",
    choices: [
        {text: "[ [ Spend time with the other soldiers ] ]" , goto: "soldiers"},
        {text: "[ [ Practice shooting ] ]" , goto: "targetP2"},
        {text: "[ [ Rest ] ]" , goto: "rest2"},
    ]
},

soldiers: {
    text: "You spend time with your fellow soldiers. You can feel the tension in the air, our forces are dwindling and you can see that your time for battle is closing in.",
    choices: [
        {text: "- 1 Week Later -" , goto: "oneWeek"},
        
    ]
},
targetP2: {
    text: "You go to the shooting range. The air is stale, and your hands are shaking. You may be going into war soon. Hopefully this doesn't happen when that time comes.",
    choices: [
        {text: "- 1 Week Later -" , goto: "oneWeek"},
        
    ]
},
rest2: {
    text: "You go to sleep early it's hard for you to fall asleep. The night seems to be taking forever to go by.",
    choices: [
        {text: "- 1 Week Later -" , goto: "oneWeek"},
        
    ]
},

oneWeek: {
    text: "You know that it's just a matter of time before you enter the fray. Everybody seems to be asleep and the shooting range is closed so you go to sleep the division in front of you is marching into battle right now in the morning you'll be doing the same.",
    choices: [
        {text: "> The Morning After <" , goto: "mornAft"},
    ]
},

mornAft: {
    text: "You wake up in the morning to the sound of yelling. One of your comrades is shaking you, you are being invaded. The aliens finally realized that they had the upper hand in this fight and have ambushed you while you were sleeping. Within seconds you are surrounded with nowhere to run, your only option is to fight. You grab your gun where do you shoot it?",
    choices: [
        {text: "[ [ The head ] ]" , goto: "head"},
        {text: "[ [ The chest ] ]" , goto: "chest"},
        {text: "[ [ The leg ] ]" , goto: "leg"},//These 3 lead to the same text but I will change the text slightly later
        {text: "[ [ The back ] ]" , goto: "back"},
    ]
},


//No Ends
head: {
    text: "You pick your spot aim down the sights and shoot. The bullet breaks upon impact and the alien shrugs it off, soon darkness is upon you.",
    choices: [
        {text: "[ [ Your time in this world has ended ] ]"  , action: () => resetGame()},

    ]
},

chest: {
    text: "You pick your spot aim down the sights and shoot. The bullet breaks upon impact and the alien shrugs it off, soon darkness is upon you.",
    choices: [
        {text: "[ [ Your time in this world has ended ] ]"  , action: () => resetGame()},

    ]
},

leg: {
    text: "You pick your spot aim down the sights and shoot. The bullet breaks upon impact and the alien shrugs it off, soon darkness is upon you.",
    choices: [
        {text: "[ [ Your time in this world has ended ] ]"  , action: () => resetGame()},

    ]
},

back: {
    text: "You pick your spot aim down the sights and shoot. The bullet just reaches the aliens flesh stumbling it for a moment buying you some time to escape. As you make your escape you see ally reinforcements swarm the enemy. You reach a room marked classified. You have no choice but to enter. There you see a button that seems to be wired to a large amount of explosives. If you press it you will die but you will save the lives of millions if you don't Jupiter may be lost. Do you push the button?",
    choices: [
        {text: "[ [ Push the button ] ]" , goto: "push"},
        {text: "[ [ Don't push the button ] ]" , goto: "noPush"},
    ]
},

push: {
    text: "Your time in this world has ended, but you die knowing that you helped save your home.",
    choices: [
        {text: "." , action: () => resetGame()},
     
    ]
},

noPush: {
    text: "You decide not to push the button. Moments later you hear cheers coming from outside followed by a familiar voice. It was the officer who gave you this assignment. You exit the room and see that we have won. The war is over and you survived.",
    choices: [
        {text: "[ [ Many lives were lost but in the process many were saved ] ]" , action: () => resetGame()},//Maybe expand on later
    ]
},


//No Path Run

run: {
    text: "You have now gone A-wall and the military is searching for you. If you are caught you may be executed for abandoning your home and your people in their time of need. You can't go home as that will likely be the first place they check. You have a tough road ahead of you what will you do?",
    choices: [
        {text: "[ [ Return to the military ] ]" , goto: "return"},
        {text: "[ [ Go to friend or family member ] ]" , goto: "refuge"},
        {text: "[ [ Keep running ] ]" , goto: "running"},
    ]
},

running: {
    text: "You keep running never looking back. Maybe you can start over again, a second life.",
    choices: [
        {text: `[ [ " Yeah that's what I'll do." ] ]` , goto: "run2"},

    ]
},

run2: {
    text: "",
    choices: [
        {text: ">Two years have passed and you have fled the country<" , goto: "runningEnd"},
    ]
},

runningEnd: {
    text: "You started a new life with a new family, though you are not sure that the military is still looking for you, you are always cautious.",
    choices: [
        {text: "[ [ But that is a story for another time ] ]" , action: () => resetGame()},
    ]
},

return: {
    text: "You decide to return to the military base hoping for forgiveness, perhaps your life will be spared. Once you return you are greeted by the officer who initially gave you this assignment and a few more unfamiliar faces. You are told to stay where you are. The officer asks you to explain yourself. You see that you have one last chance to save your life what do you say?",
    choices: [
        {text: "[ [ Beg for forgiveness ] ]" , goto: "death"},
        {text: "[ [ Ask to be reassigned to their science division ] ]" , goto: "death"},
        {text: "[ [ I was just going for a stroll ] ]" , goto: "death"},
    ]
},

death: {
    text: "The officer looks at you pitifully. You realize now that you never had a chance. Rage fills your heart as you are gunned down never to be seen again.",
    choices: [
        {text: "[ [ Your time in this world has ended ] ]" , action: () => resetGame()},
    ]
},

refuge: {
    text: "You think of a place where you can go. Sorting through all of the options you realize that you only have one place to go. Your cousin lives not far from where you are now, but is this the wisest decision to make? Your cousin has never really liked you very much.",
    choices: [
        {text: "[ [ Go to your cousins house ] ]" , goto: "cousin"},
        {text: "[ [ Go to your house ] ]" , goto: "home"},
    ]
},

mornAft: {
    text: "You decide that your best chance of survival is to go to your cousins house. It is very late at night when you finally arrive at your cousins home. You bang on the door waking them. Your cousin furiously invites you inside. You explain your situation and are invited to spend the night. Your cousin leaves. You are now alone with very little in the fridge and nothing on TV you decide to go to sleep. As the night goes by you hear a loud bang.",
    choices: [
        {text: "[ [ Your time in this world has ended ] ]" , action: () => resetGame()},
    ]
},

home: {
    text: "You decide to go to your house, maybe you'll be safe. You enter your house through the back door only to be greeted by heavily armed soldiers.",
    choices: [
        {text: "[ [ Run for it ] ]" , goto: "escape"},
        {text: "[ [ Give up ] ]" , goto: "surrender"},
    ]
},

escape: {
    text: "You turn around to run away but are shot on sight.",
    choices: [
        {text: "[ [ Your time in this world has ended ] ]" , action: () => resetGame()},
    ]
},

surrender: {
    text: "They grab you tying your hands behind your back you have been sentenced to death with no way to escape. They bring you to a secluded location where you are hanged never to be seen again.",
    choices: [
        {text: "[ [ Your time in this world has ended ] ]" , action: () => resetGame()},
    ]
},


};
//CoreFunctions


function resetGame() {
    inventory = [];
    inventoryList.innerHTML = "";
    
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    gameContainer.style.height = "200px";

    playerNameInput.value = "";
    
    inventorySection.classList.add("hidden");
    
    document.querySelector(".game-container")?.classList.remove("dynamic");
    
    storyText.textContent = "";
    choicesDiv.innerHTML = "";
    
    currentPosition = "start";
}

// Event Listeners

playerForm.addEventListener("submit", startGame);
window.addEventListener("load", () => {
    if (localStorage.getItem("playerName")) {
        playerNameInput.value = localStorage.getItem("playerName");
    }
});

// Form validation
playerNameInput.addEventListener("input", validateName);

function validateName(event) {
        const name = event.target.value;
        const errorDiv = document.querySelector(".error") || document.createElement("div");
        errorDiv.className = "error";
        
    if (name.length < 2) {
        errorDiv.textContent = "Name must be at least 2 characters long";
        if (!document.querySelector(".error")) {
            playerForm.appendChild(errorDiv);
     }
            gameContainer.classList.add("expand");
        setTimeout(() => gameContainer.classList.remove("expand"), 300);
        return false;
    } else {
        errorDiv.remove();
        return true
    }
}


//Typing Animation
function typeText(element, text, callback) {
    let index = 0;
    element.textContent = "";
    
    function type() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
             setTimeout(type, 7);;
        } else if (callback) {
            callback();
        }
    }
    
    requestAnimationFrame(type);
}


function startGame(event) {
    event.preventDefault();
    if(!validateName({target:playerNameInput})){
        return;
    }
    playerName = playerNameInput.value;
    localStorage.setItem("playerName", playerName);
    
        startScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");

         localStorage.setItem("playerName", playerName);
            gameContainer.style.height = "800px";
    
   
    
    updateStart("start");
    
}



function updateStart(startId) {
    const start = game[startId];
    currentPosition = startId;
    
    choicesDiv.innerHTML = "";
    
    storyText.textContent = "";
    
    //Text
typeText(storyText, start.text, () => {
    

        const fragment = document.createDocumentFragment();
        
      
        while (choicesDiv.firstChild) {
            choicesDiv.firstChild.remove();
        }

        //Required Items
        start.choices?.forEach(choice => {
            if (!choice.requires || inventory.includes(choice.requires)) {
                const choiceBtn = choiceTemplate.content.cloneNode(true).querySelector("button");
                choiceBtn.textContent = choice.text;
                
               
                const newButton = choiceBtn.cloneNode(true);
                
               
                newButton.addEventListener("click", () => {
                    if (choice.action) choice.action();
                    updateStart(choice.goto);
                });
                
                    fragment.appendChild(newButton);
            }
        });
        
                    choicesDiv.appendChild(fragment);
    });
}

inventorySection.classList.add("hidden");

function addToInventory(item) {
    if (!inventory.includes(item)) {
      
        inventorySection.classList.remove("hidden");
        
        inventory.push(item);
        const li = document.createElement("li");
        li.textContent = item;
        inventoryList.appendChild(li);
    }
} 


// BOM 

// window.onbeforeunload = function(alert) {
//     return "The game will reset. Continue?";
// };


// window.addEventListener("onbeforeunload" , function(alert) {
//     alert.preventDefault();
//     alert.returnValue = "";
//     return "The game will reset. Continue?";
// });