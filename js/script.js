//#region GLOBAL VARIABLES:
const imgBackPrefix =
  "https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523440/PlayingCards/war-deck-png/backs/";
const urlPrefix =
  "https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523441/PlayingCards/war-deck-png/";

// cached DOM elements:
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

//#region INSTANCES
const computer = new Player("Computer");
const player = new Player("Kristen");
const newDeck = new Deck();
//#endregion INSTANCES

//#region FUNCTIONS:
// check for empty hand, reshuffle discard pile to continue playing if hand is empty
const reshuffleDiscardPile = (
  computerDiscardPile,
  playerDiscardPile,
  computerHand,
  playerHand
) => {
  //
  //
  // check if players hands are empty
  if (computer.hand.length === 0) {
    // shuffle discardPile
    newDeck.shuffle(computer.discardPile);
    // hide computer playing card
    computerPlayCard.style.display = "none";
    infoText.innerText =
      "Click your won cards to reshuffle and add back to hand.";
    // push discardPile to hand
    computer.hand = computer.discardPile.splice(0, computer.discardPile.length);
  }
  if (player.hand.length === 0) {
    // shuffle discardPile
    newDeck.shuffle(player.discardPile);
    // hide player playing card
    playerPlayCard.style.display = "none";
    infoText.innerText =
      "Click your won cards to reshuffle and add back to hand.";
    // push discardPile to hand
    player.hand = player.discardPile.splice(0, player.discardPile.length);
  }
};

// show/hide cards in hand based on how many are still in hand.
const showCardInPlay = (computersCard, playersCard, infoText) => {
  if (computer.hand.length > 0 || player.hand.length > 0) {
    computerPlayCard.innerHTML = `<img src="${urlPrefix}${computersCard.id}.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
    playerPlayCard.innerHTML = `<img src="${urlPrefix}${playersCard.id}.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
  }
  if (computer.hand.length === 0 || player.hand.length === 0) {
    computerPlayCard.style.display = "none";
    playerPlayCard.style.display = "none";
    infoText.innerText =
      "Click your discard pile to reshuffle and add back to hand.";
  }
};

// compare cards:
const compareCards = (computersCard, playersCard) => {
  // if tie:
  if (computersCard.value === playersCard.value) {
    infoText.innerText = "it's a draw";
    // pop last card out of hand, push into discard pile(for computersCard & playersCard)
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
    const loser = computer.score === "0" ? computer : player;

    alert(winner + "won!");
    return winner;
  }
};

// play a round of War
const playWar = (computer, player) => {
  // variables for the cards currently in play
  const computersCard = computer.playCard();
  const playersCard = player.playCard();
  // check for a winner
  checkForWinner();
  // show current cards in play & update info text accordingly
  showCardInPlay(computersCard, playersCard, infoText);
  // compare cards
  compareCards(computersCard, playersCard);
  // update computer & player scores
  computer.updateScore(computerScore);
  player.updateScore(playerScore);
};
//#endregion FUNCTIONS

//#region EVENT LISTENERS:
// click deck to shuffle and deal:
deckCard.addEventListener("click", () => {
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

// click playing card to compare cards
playerPlayCard.addEventListener("click", () => {
  // show discard pile
  computerDiscard.style.display = "flex";
  playerDiscard.style.display = "flex";
  // invoke battle to compare cards
  playWar(computer, player);
});

// click discard pile to reshuffle when playing cards have run out:
playerDiscard.addEventListener("click", () => {
  // hide playing cards
  computerDiscard.style.display = "none";
  playerDiscard.style.display = "none";
  // reshuffle discard pile & return to hand to continue
  reshuffleDiscardPile(
    computer.discardPile,
    player.discardPile,
    computer.hand,
    player.hand
  );
  // show playing cards
  computerPlayCard.innerHTML = `<img src="https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523440/PlayingCards/war-deck-png/backs/red.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
  playerPlayCard.innerHTML = `<img src="https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523440/PlayingCards/war-deck-png/backs/red.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
  computerPlayCard.style.display = "flex";
  playerPlayCard.style.display = "flex";
  // change info text
  infoText.innerText = "Click your card to battle.";

  // at this point, this works - BUT only the first time around... hm
});
//#endregion EVENT LISTENERS
