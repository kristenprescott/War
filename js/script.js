// BEFORE

//#region GLOBAL VARIABLES:
const imgBackPrefix =
  "https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523440/PlayingCards/war-deck-png/backs/";
const urlPrefix =
  "https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523441/PlayingCards/war-deck-png/";
const imageStyles =
  ' width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"';

// cached DOM elements:
const playBtn = document.getElementById("play-btn");
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const deckCard = document.getElementById("deck-card");
const computerPlayCard = document.getElementById("computer-play-card");
const playerPlayCard = document.getElementById("player-play-card");
const computerDiscard = document.getElementById("computer-discard");
const playerDiscard = document.getElementById("player-discard");
const infoText = document.getElementById("info-text");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const abstract = document.getElementById("abstract");
const abstractClouds = document.getElementById("abstract-clouds");
const abstractScene = document.getElementById("abstract-scene");
const cars = document.getElementById("cars");
const astronaut = document.getElementById("astronaut");
const frog = document.getElementById("frog");
const fish = document.getElementById("fish");
//#endregion GLOBAL VARIABLES

const app = () => {
  //#region CLASSES
  class Deck {
    constructor() {
      this.deck = [];
      this.deckLength = 0;

      const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];

      const ranks = [
        "A",
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
      ];

      // make deck:
      suits.forEach((suit, s) => {
        ranks.forEach((rank, r) => {
          let card = {
            rank: ranks[r],
            suit: suits[s],
            value: r + 1,
            name: `${rank} of ${suit}`,
            id: `${rank}Of${suit}`,
          };
          this.deck.push(card);
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
      // deal (split deck in hald)
      computer.hand = this.deck.splice(0, Math.ceil(this.deck.length / 2));
      player.hand = this.deck.splice(0, this.deck.length);
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
      // return last card in hand
      return this.hand[this.hand.length - 1];
    };
    updateScore = (domRef) => {
      this.score = this.hand.length + this.discardPile.length;
      // print score to DOM:
      const score = this.score;
      domRef.innerHTML = `<div class="score-box">
              <div class="score-title">CARD COUNT:</div>
              <span id="score">${score}</span>
            </div>`;
    };
    showDiscardPileValues = () => {
      return this.discardPile[this.discardPile.length - 1];
    };
  }

  //#endregion CLASSES

  //#region FUNCTIONS:

  const reshuffleDiscardPile = (playerDiscardPile, playerHand) => {
    // check if players hand is empty
    if (player.hand.length === 0) {
      // shuffle discardPile
      newDeck.shuffle(player.discardPile);
      // push discardPile to hand
      player.hand = player.discardPile.splice(0, player.discardPile.length);
    }
  };

  // show player card in play:
  const showCardInPlay = (playersCard, infoText) => {
    playerPlayCard.innerHTML = `<img src="${urlPrefix}${playersCard.id}.png"${imageStyles}></img>`;
  };

  //#region COMPUTER LOGIC:
  // computer reshuffle stuff:
  const reshuffleComputerDiscardPile = (infoText) => {
    // check if computers hand is empty
    if (computer.hand.length === 0) {
      // shuffle discardPile
      newDeck.shuffle(computer.discardPile);
      // hide computer playing card
      computerPlayCard.innerHTML = "";

      // push discardPile to hand
      computer.hand = computer.discardPile.splice(
        0,
        computer.discardPile.length
      );
      // show computer playing cards
      computerPlayCard.innerHTML = `<img src="${imgBackPrefix}red.png"${imageStyles}></img>`;
      // show info text
      infoText.innerText = "computer is reshuffling";
      //remove discard pile
      computerDiscard.innerHTML = "";
    }
  };

  // show computer card in play:
  const showComputerCardInPlay = (computersCard) => {
    computerPlayCard.innerHTML = `<img src="${urlPrefix}${computersCard.id}.png"${imageStyles}></img>`;
  };

  //#endregion COMPUTER LOGIC

  // compare cards:
  const compareCards = (computersCard, playersCard) => {
    // if tie:
    if (computersCard.value === playersCard.value) {
      infoText.innerText = "it's a draw";
      computer.hand.pop();
      computer.discardPile.push(computersCard);
      player.hand.pop();
      player.discardPile.push(playersCard);
      // if computers card wins:
    } else if (computersCard.value > playersCard.value) {
      infoText.innerText = "you lost this battle.";
      // pop last card out of player and computer hand, push into computer discard pile
      player.hand.pop();
      computer.hand.pop();
      computer.discardPile.push(computersCard, playersCard);
      // if player's card wins:
    } else {
      infoText.innerText = "you win this battle!";
      // pop last card out of player and computer hand, push into player discard pile
      computer.hand.pop();
      player.hand.pop();
      player.discardPile.push(computersCard, playersCard);
    }
  };

  // check for any winners
  const checkForWinner = () => {
    if (
      computer.score === newDeck.deckLength ||
      player.score === newDeck.deckLength
    ) {
      const winner = computer.score === newDeck.deckLength ? computer : player;

      alert(winner.name + " won!");
      infoText.innerText = "";
      playBtn.style.display = "flex";
      return winner;
    }
  };
  //#region INSTANCES
  const computer = new Player("Computer");
  const player = new Player("Kristen");
  const newDeck = new Deck();

  //#endregion INSTANCES
  // play a round of War
  const playWar = () => {
    // // show computer discard pile
    computerDiscard.style.display = "flex";
    playerDiscard.style.display = "flex";
    // variables for the cards currently in play
    const computersCard = computer.playCard();
    const playersCard = player.playCard();

    // show current cards in play & update info text accordingly
    showCardInPlay(playersCard, infoText);
    showComputerCardInPlay(computersCard);

    // compare cards
    compareCards(computersCard, playersCard);

    // show computer discard pile
    computerDiscard.innerHTML = `<img src="${imgBackPrefix}red.png"${imageStyles}></img>`;
    // show player discard pile
    playerDiscard.innerHTML = `<img src="${imgBackPrefix}red.png"${imageStyles}></img>`;

    // update player score
    player.updateScore(playerScore);
    // update computer score
    computer.updateScore(computerScore);

    // check for a winner
    checkForWinner();

    // reshuffle computers discard pile if needed
    reshuffleComputerDiscardPile(infoText);

    if (player.hand.length === 0) {
      playerPlayCard.innerHTML = "";
      alert("click your discard pile to reshuffle and add back to hand");
      infoText.innerText =
        "Click your discard pile to reshuffle and add back to hand.";
    }
  };
  //#endregion FUNCTIONS

  //#region EVENT LISTENERS:
  // click deck to shuffle and deal:
  deckCard.addEventListener("click", () => {
    // hide play btn
    playBtn.style.display = "none";
    newDeck.shuffle();
    newDeck.deal(computer, player);
    // hide deck card
    deckCard.style.display = "none";
    // show playing cards
    computerPlayCard.style.display = "flex";
    playerPlayCard.style.display = "flex";
    // change info text
    infoText.innerText = "Click your card to battle.";
    sidebar.classList.add("close");
  });

  // click playing card to show cards and playWar()
  playerPlayCard.addEventListener("click", () => {
    sidebar.classList.add("close");
    // start game
    playWar(computer, player);
  });

  // click discard pile to reshuffle when playing cards have run out:
  playerDiscard.addEventListener("click", () => {
    sidebar.classList.add("close");

    // hide playing cards
    playerDiscard.innerHTML = "";

    // reshuffle discard pile & return to hand to continue
    reshuffleDiscardPile(player.discardPile, player.hand);

    // show player playing cards
    playerPlayCard.innerHTML = `<img src="${imgBackPrefix}red.png"${imageStyles}></img>`;
    playerPlayCard.style.display = "flex";
    // change info text
    infoText.innerText = "Click your card to battle.";
  });
  //#endregion EVENT LISTENERS
};

// // log state
// const warLog = document.getElementById("logState");
// warLog.addEventListener("click", () => {
//   //
//   console.log(player);
//   console.log(computer);
// });

playBtn.addEventListener("click", () => {
  alert("click deck to deal cards");
  sidebar.classList.add("close");
  app();
});
