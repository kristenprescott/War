//#region CLASSES
class Deck {
  constructor() {
    this.deck = [];
    this.deckLength = 0;

    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];

    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    // pushes { rank: rank, suit: suit }
    suits.forEach((suit, s) => {
      //for each 'suit' item in suits
      ranks.forEach((rank, r) => {
        //for eack rank in ranks
        // console.log(r);
        let card = {
          rank: ranks[r],
          suit: suits[s],
          value: r + 1,
          //   owner: "",
          name: `${rank} of ${suit}`,
          id: `${rank}Of${suit}`,
        };
        this.deck.push(card);
        // console.log(card);
      });
    });

    this.deckLength = this.deck.length;
  }

  //methods
  shuffle = (deck) => {
    if (!deck) {
      deck = this.deck;
    }

    for (let i = 0; i < 169; i++) {
      let first = Math.floor(Math.random() * deck.length);
      let second = Math.floor(Math.random() * deck.length);
      let temp = deck[first];

      deck[first] = deck[second];
      deck[second] = temp;
    }
  };
  deal = (computer, player) => {
    this.shuffle();
    // give first half of deck to computer and the second half to player
    computer.hand = this.deck.splice(0, Math.ceil(this.deck.length / 2));
    player.hand = this.deck.splice(0, this.deck.length);

    // computer.hand.forEach((card) => {
    //   //for each card in player's hand assign ownership
    //   card.owner = computer.name;
    // });
    // player.hand.forEach((card) => {
    //   card.owner = player.name;
    // });
  };
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.discardPile = [];
    this.score = 0;
  }
  //methods
  playCard = () => {
    // console.log(this);
    let cardInPlay = this.hand[this.hand.length - 1];
    return cardInPlay;
  };
  updateScore = () => {
    this.score = this.hand.length + this.discardPile.length;
  };
}

//#endregion CLASSES

//#region INSTANCES

const newDeck = new Deck();
// <<<-------------------------------------------------------------------------- organize code:
// global variables, instantiations (are those glob vars?)
// console.log(newDeck.deck[0].name, newDeck.deck[22].name);

newDeck.shuffle();
// console.log(newDeck.deck[0].name, newDeck.deck[22].name);

const computer = new Player("Computer");
// <<<-------------------------------------------------------------------------- redefine player as input.value
// also, make an input.
const player = new Player("Kristen");

//#endregion INSTANCES

//#region WAR:

// ask for player name

// shuffle/deal
newDeck.deal(computer, player);

//#region GLOBAL VARIABLES:
const computersCard = computer.playCard();
const playersCard = player.playCard();
//#endregion GLOBAL VARIABLES

//#region FUNCTIONS:
//#region COMPARE CARDS (future function)
const compareCards = () => {
  // compare cards:
  if (computersCard.value === playersCard.value) {
    // console.log("draw");
    // <<<-------------------------------------------------------------------------- print ('draw')
    // <<<-------------------------------------------------------------------------- some animation
    // pop last card out of hand, push into discard pile(for computersCard & playersCard)
    computer.hand.pop();
    computer.discardPile.push(computersCard);
    player.hand.pop();
    player.discardPile.push(playersCard);
    // <<<-------------------------------------------------------------------------- change image to next card in stack of hand[] for both computersCard & playersCard
  }
  if (computersCard.value > playersCard.value) {
    // console.log("computer wins with: " + computersCard.name);
    // <<<-------------------------------------------------------------------------- print 'you lost this battle, but you may win the war yet'
    // <<<-------------------------------------------------------------------------- explode playersCard
    player.hand.pop();
    computer.hand.pop();
    computer.discardPile.push(computersCard, playersCard);
    // <<<-------------------------------------------------------------------------- change image to next card in stack of hand[] for both computersCard & playersCard
  } else {
    // console.log("player wins with: " + playersCard.name);
    // <<<-------------------------------------------------------------------------- print 'you won this battle!'
    // <<<-------------------------------------------------------------------------- explode computersCard
    computer.hand.pop();
    player.hand.pop();
    player.discardPile.push(computersCard, playersCard);
    // <<<-------------------------------------------------------------------------- change image to next card in stack of hand[] for both computersCard & playersCard
  }
};
//#endregion COMPARE CARDS

//#endregion FUNCTIONS

//#region BATTLE
// battle:
const battle = () => {
  compareCards();

  computer.updateScore();
  player.updateScore();
  //   // <<<-------------------------------------------------------------------------- for testing game full run + updateScore() of both computer and player:
  //   console.log("computer: ");
  //   console.log(computer.score);
  //   console.log("player: ");
  //   console.log(player.score);

  // ^print score to DOM instead here^
  // <<<-------------------------------------------------------------------------- print scores to DOM under cardCount(divs called computer/playerScore or computer/player-score i think)
  // check if players hands.length + players discardPile.length = deck.length

  //#region CHECK FOR WINNER (future function)
  // basically, check if anyone won the game yet
  if (
    computer.score === newDeck.deckLength ||
    player.score === newDeck.deckLength
  ) {
    // console.log("computer: ");
    // console.log(computer.score);
    // console.log("player: ");
    // console.log(player.score);
    // console.log("game over");
    // <<<-------------------------------------------------------------------------- print "some war quote about how its tough and lets see who won"
    const winner = computer.score === newDeck.deckLength ? computer : player;
    const loser = computer.score === 0 ? computer : player;
    // testing winner/loser logic:
    console.log(winner.discardPile.length);
    console.log(loser.discardPile.length);
    console.log(winner.name);
    console.log(winner.score);
    console.log(loser.name);
    console.log(loser.score);
    // <<<-------------------------------------------------------------------------- print winner announcement
    // <<<-------------------------------------------------------------------------- issue: how to access name of computer or player if winner
    return winner;
  }
  //#endregion CHECK FOR WINNER

  // <<<-------------------------------------------------------------------------- BELOW:
  // <<<-------------------------------------------------------------------------- issue:
  // <<<------------------------------------------ if click event to flip card lives on playerCard, how to render that card while/after the hand[] stack is empty and the discardPile is shuffled
  //#region CHECK FOR EMPTY HANDS TO RESHUFFLE AND USE AS NEW HAND (future function)
  // check if players hands are empty
  if (computer.hand.length === 0) {
    // shuffle discardPile
    newDeck.shuffle(computer.discardPile);
    // push discardPile to hand
    computer.hand = computer.discardPile.splice(0, computer.discardPile.length);
  }
  if (player.hand.length === 0) {
    // shuffle discardPile
    newDeck.shuffle(player.discardPile);
    // push discardPile to hand
    player.hand = player.discardPile.splice(0, player.discardPile.length);
  }
  //#endregion CHECK FOR EMPTY HANDS TO RESHUFFLE AND USE AS NEW HAND
};

//#endregion BATTLE

//#region DOM INTERACTION: ALERT WINNER, END GAME
// <<<-------------------------------------------------------------------------- testing game full run + updateScore() of both computer and player:
for (let i = 0; i < 10000; i++) {
  const winner = battle();
  if (winner) {
    break;
  }
}
// <<<-------------------------------------------------------------------------- alert(winnerwinnerchickendinner!)
//#endregion DOM INTERACTION: ALERT WINNER, END GAME
//#endregion WAR

//#region DOM RENDER:
//#region CARD BACK DESIGN SELECTION:
// cached DOM elements:
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const abstract = document.getElementById("abstract");
const abstractClouds = document.getElementById("abstract-clouds");
const abstractScene = document.getElementById("abstract-scene");
const cars = document.getElementById("cars");
const astronaut = document.getElementById("astronaut");
const frog = document.getElementById("frog");
const fish = document.getElementById("fish");

// variables:
const imgBackPrefix =
  "https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523440/PlayingCards/war-deck-png/backs/";

// callback functions for click events:
//red:
const handleRedDesignChange = () => {
  // deck card
  const redDesign = document.createElement("img");
  redDesign.style.display = "flex";
  redDesign.style.justifyContent = "space-around";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}red.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  const redComputerDesign = document.createElement("img");
  redComputerDesign.style.display = "flex";
  redComputerDesign.style.justifyContent = "space-around";
  redComputerDesign.style.boxShadow =
    "-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}red.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const redPlayerDesign = document.createElement("img");
  redPlayerDesign.style.display = "flex";
  redPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}red.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//blue:
const handleBlueDesignChange = () => {
  // deck card
  const blueDesign = document.createElement("img");
  blueDesign.style.display = "flex";
  blueDesign.style.justifyContent = "space-around";
  blueDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}blue.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const blueComputerDesign = document.createElement("img");
  blueComputerDesign.style.display = "flex";
  blueComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}blue.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const bluePlayerDesign = document.createElement("img");
  bluePlayerDesign.style.display = "flex";
  bluePlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}blue.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//abstract:
const handleAbstractDesignChange = () => {
  // deck card
  const abstractDesign = document.createElement("img");
  abstractDesign.style.display = "flex";
  abstractDesign.style.justifyContent = "space-around";
  abstractDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}abstract.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const abstractComputerDesign = document.createElement("img");
  abstractComputerDesign.style.display = "flex";
  abstractComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}abstract.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const abstractPlayerDesign = document.createElement("img");
  abstractPlayerDesign.style.display = "flex";
  abstractPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}abstract.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//abstractClouds:
const handleAbstractCloudsDesignChange = () => {
  // deck card
  const abstractCloudsDesign = document.createElement("img");
  abstractCloudsDesign.style.display = "flex";
  abstractCloudsDesign.style.justifyContent = "space-around";
  abstractCloudsDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}abstractclouds.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const abstractCloudsComputerDesign = document.createElement("img");
  abstractCloudsComputerDesign.style.display = "flex";
  abstractCloudsComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}abstractclouds.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const abstractCloudsPlayerDesign = document.createElement("img");
  abstractCloudsPlayerDesign.style.display = "flex";
  abstractCloudsPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}abstractclouds.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//abstractScene:
const handleAbstractSceneDesignChange = () => {
  // deck card
  const abstractSceneDesign = document.createElement("img");
  abstractSceneDesign.style.display = "flex";
  abstractSceneDesign.style.justifyContent = "space-around";
  abstractSceneDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}abstractscene.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const abstractSceneComputerDesign = document.createElement("img");
  abstractSceneComputerDesign.style.display = "flex";
  abstractSceneComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}abstractscene.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const abstractScenePlayerDesign = document.createElement("img");
  abstractScenePlayerDesign.style.display = "flex";
  abstractScenePlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}abstractscene.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//cars:
const handleCarsDesignChange = () => {
  // deck card
  const carsDesign = document.createElement("img");
  carsDesign.style.display = "flex";
  carsDesign.style.justifyContent = "space-around";
  carsDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}cars.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const carsComputerDesign = document.createElement("img");
  carsComputerDesign.style.display = "flex";
  carsComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}cars.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const carsPlayerDesign = document.createElement("img");
  carsPlayerDesign.style.display = "flex";
  carsPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}cars.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//astronaut:
const handleAstronautDesignChange = () => {
  // deck card
  const astronautDesign = document.createElement("img");
  astronautDesign.style.display = "flex";
  astronautDesign.style.justifyContent = "space-around";
  astronautDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}astronaut.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const astronautComputerDesign = document.createElement("img");
  astronautComputerDesign.style.display = "flex";
  astronautComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}astronaut.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const astronautPlayerDesign = document.createElement("img");
  astronautPlayerDesign.style.display = "flex";
  astronautPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}astronaut.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//frog:
const handleFrogDesignChange = () => {
  // deck card
  const frogDesign = document.createElement("img");
  frogDesign.style.display = "flex";
  frogDesign.style.justifyContent = "space-around";
  frogDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}frog.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const frogComputerDesign = document.createElement("img");
  frogComputerDesign.style.display = "flex";
  frogComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}frog.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const frogPlayerDesign = document.createElement("img");
  frogPlayerDesign.style.display = "flex";
  frogPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}frog.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//fish:
const handleFishDesignChange = () => {
  // deck card
  const fishDesign = document.createElement("img");
  fishDesign.style.display = "flex";
  fishDesign.style.justifyContent = "space-around";
  fishDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}fish.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const fishComputerDesign = document.createElement("img");
  fishComputerDesign.style.display = "flex";
  fishComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}fish.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const fishPlayerDesign = document.createElement("img");
  fishPlayerDesign.style.display = "flex";
  fishPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}fish.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

// click events:
red.addEventListener("click", handleRedDesignChange);
blue.addEventListener("click", handleBlueDesignChange);
abstract.addEventListener("click", handleAbstractDesignChange);
abstractClouds.addEventListener("click", handleAbstractCloudsDesignChange);
abstractScene.addEventListener("click", handleAbstractSceneDesignChange);
cars.addEventListener("click", handleCarsDesignChange);
astronaut.addEventListener("click", handleAstronautDesignChange);
frog.addEventListener("click", handleFrogDesignChange);
fish.addEventListener("click", handleFishDesignChange);
//#endregion CARD BACK DESIGN SELECTION
//
//#region RENDER CARDS IN PLAY:
// dom nodes
const computerPlayCard = document.getElementById("computer-play-card");
const playerPlayCard = document.getElementById("player-play-card");

//callback function
const handleCardsInPlay = () => {
  //when playerPlayCard is clicked
  //
  //change image of computersCard && playersCard
  //    grab computerPlayCard && playerPlayCard
  //    change each to current corresponding computersCard & playersCard
  //        create new image element
  //        src=`${urlPrefix}${RankOfSuit}.png` of computersCard
  //        src=`${urlPrefix}${RankOfSuit}.png` of playersCard
  //    computerPlayCardImg.style.whatever = "stylings of card on page this replaces"
  //   display: flex;
  //   justify-content: space-evenly;
  //    attach each to corresponding div
  //    pat self on back for being awesome
};

//event listeners
// computerPlayCard.addEventListener("click", handleComputerPlayCard);
playerPlayCard.addEventListener("click", handleCardsInPlay);

//#endregion RENDER CARDS IN PLAY
//#endregion DOM RENDER

//#region EVENT LISTENERS:
//
// <<<-------------------------------------------------------------------------- add event listeners:
// <<<-------------------------------------------------------------------------- DECK: begin game
// <<<-------------------------------------------------------------------------- RESET: play again?
const collapseBtn = document.getElementById("sidebar-collapse-btn");
const sidebar = document.getElementById("sidebar");
const container = document.querySelector(".container");
handleCollapseBtn = () => {
  sidebar.classList.toggle("close");
};
collapseBtn.addEventListener("click", handleCollapseBtn);

//#endregion EVENT LISTENERS

//#region MODAL:
// select the open-btn button
let openBtn = document.getElementById("rules-btn-container");
// select the modal-background
let modalBackground = document.getElementById("modal-background");
// select the close-btn
let closeBtn = document.getElementById("close-btn");

// shows the modal when the user clicks open-btn
openBtn.addEventListener("click", function () {
  modalBackground.style.display = "block";
});

// hides the modal when the user clicks close-btn
closeBtn.addEventListener("click", function () {
  modalBackground.style.display = "none";
});

// hides the modal when the user clicks outside the modal
window.addEventListener("click", function (event) {
  // check if the event happened on the modal-background
  if (event.target === modalBackground) {
    // hides the modal
    modalBackground.style.display = "none";
  }
});

//#endregion MODAL
