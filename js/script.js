//#region GLOBAL VARIABLES:
const imgBackPrefix =
  "https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523440/PlayingCards/war-deck-png/backs/";
const urlPrefix =
  "https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523441/PlayingCards/war-deck-png/";

// cached DOM elements:
const deckCard = document.getElementById("deck-card");
const computerPlayCard = document.getElementById("computer-play-card");
const playerPlayCard = document.getElementById("player-play-card");
const computerDiscard = document.getElementById("computer-discard");
const playerDiscard = document.getElementById("player-discard");
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

    // const suits = ["Spades"];
    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];

    // const ranks = ["2", "3"];

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
    // let cardInPlay = this.hand[this.hand.length - 1];
    // return cardInPlay;
    // pass in any arr, when playcard is called pass in player/computer.hand/.discardPile when needed
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
// instantiate new Players
const computer = new Player("Computer");
const player = new Player("Kristen");
// instantiate new Deck, shuffle deck
const newDeck = new Deck();
//#endregion INSTANCES

//#region WAR:

// ask for player name

//#region BATTLE
// battle:
const battle = (computer, player) => {
  const computersCard = computer.playCard();
  const playersCard = player.playCard();
  let computerCardInPlay = computer.playCard();
  let playerCardInPlay = player.playCard();

  if (computer.hand.length > 0 || player.hand.length > 0) {
    computerPlayCard.innerHTML = `<img src="${urlPrefix}${computerCardInPlay.id}.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
    playerPlayCard.innerHTML = `<img src="${urlPrefix}${playerCardInPlay.id}.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
  } else if (computer.hand.length === 0 || player.hand.length === 0) {
    computerPlayCard.style.display = "none";
    playerPlayCard.style.display = "none";
    // // then reshuffle discard pile
    // reshuffleDiscardPile(
    //   computer.discardPile,
    //   player.discardPile,
    //   computer.hand,
    //   player.hand
    // );
    // computerPlayCard.style.display = "flex";
    // playerPlayCard.style.display = "flex";
    // computerPlayCard.innerHTML = `<img src="${urlPrefix}${computerCardInPlay.id}.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
    // playerPlayCard.innerHTML = `<img src="${urlPrefix}${playerCardInPlay.id}.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
  }

  //#region COMPARE CARDS
  // compare cards:
  if (computersCard.value === playersCard.value) {
    console.log("ITS A DRAW");
    console.log("computer card/value: ");
    console.log(computersCard.name);
    console.log(computersCard.value);
    console.log("player card/value: ");
    console.log(playersCard.name);
    console.log(playersCard.value);
    // <<<-------------------------------------------------------------------------- print ('draw')
    // <<<-------------------------------------------------------------------------- some animation
    // pop last card out of hand, push into discard pile(for computersCard & playersCard)
    computer.hand.pop();
    computer.discardPile.push(computersCard);
    player.hand.pop();
    player.discardPile.push(playersCard);
    // console.log("computersDiscards values after accepting hand items");
    // console.log(computersDiscards.value);

    // console.log("playersDiscards values after accepting hand items");
    // console.log(playersDiscards.value);
  } else if (computersCard.value > playersCard.value) {
    console.log("COMPUTER WINS with: " + computersCard.name);
    console.log("computer card/value: ");
    console.log(computersCard.name);
    console.log(computersCard.value);
    console.log("player card/value: ");
    console.log(playersCard.name);
    console.log(playersCard.value);
    // <<<-------------------------------------------------------------------------- print 'you lost this battle, but you may win the war yet'
    // <<<-------------------------------------------------------------------------- explode playersCard
    player.hand.pop();
    computer.hand.pop();
    computer.discardPile.push(computersCard, playersCard);
    // console.log("computersDiscards values after accepting hand items");
    // console.log(computersDiscards.value);
  } else {
    console.log("PLAYER WINS with: " + playersCard.name);
    console.log("computer card/value: ");
    console.log(computersCard.name);
    console.log(computersCard.value);
    console.log("player card/value: ");
    console.log(playersCard.name);
    console.log(playersCard.value);
    // <<<-------------------------------------------------------------------------- print 'you won this battle!'
    // <<<-------------------------------------------------------------------------- explode computersCard
    computer.hand.pop();
    player.hand.pop();
    player.discardPile.push(computersCard, playersCard);
    // console.log("playersDiscards values after accepting hand items");
    // console.log(playersDiscards.value);
  }
  //#endregion COMPARE CARDS

  //#region UPDATE & PRINT SCORES:
  const computerScore = document.getElementById("computer-score");
  const playerScore = document.getElementById("player-score");
  computer.updateScore(computerScore);
  player.updateScore(playerScore);
  //#endregion UPDATE & PRINT SCORES

  //#region CHECK FOR WINNER
  // check if players hands.length + players discardPile.length = deck.length - if anyone won the game yet
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
    const loser = computer.score === "0" ? computer : player;
    // testing winner/loser logic:
    console.log("winner: ");
    console.log(winner.name);
    console.log(winner.score);
    console.log(winner.discardPile.length);
    console.log("loser: ");
    console.log(loser.name);
    console.log(loser.score);
    console.log(loser.discardPile.length);
    // <<<-------------------------------------------------------------------------- print winner announcement
    alert(winner + "won!");
    return winner;
  }
  //#endregion CHECK FOR WINNER
};

//   //   //#endregion CHECK FOR EMPTY HANDS TO RESHUFFLE AND USE AS NEW HAND
const reshuffleDiscardPile = (
  computerDiscardPile,
  playerDiscardPile,
  computerHand,
  playerHand
) => {
  //   //#region CHECK FOR EMPTY HANDS TO RESHUFFLE AND USE AS NEW HAND:
  // check if players hands are empty
  if (computer.hand.length === 0) {
    computerPlayCard.style.display = "none";
    // computerPlayCard.innerHTML = `<img src="${urlPrefix}${red}.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

    // shuffle discardPile
    newDeck.shuffle(computer.discardPile);
    // push discardPile to hand
    computer.hand = computer.discardPile.splice(0, computer.discardPile.length);
  }
  if (player.hand.length === 0) {
    playerPlayCard.style.display = "none";
    // playerPlayCard.innerHTML = `<img src="${urlPrefix}${red}.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
    // shuffle discardPile
    newDeck.shuffle(player.discardPile);
    // push discardPile to hand
    player.hand = player.discardPile.splice(0, player.discardPile.length);
  }
};
//   //#endregion CHECK FOR EMPTY HANDS TO RESHUFFLE AND USE AS NEW HAND

//#endregion BATTLE

//#region DOM INTERACTION: ALERT WINNER, END GAME
// <<<-------------------------------------------------------------------------- testing game full run + updateScore() of both computer and player:
// for (let i = 0; i < 500; i++) {
//   const winner = battle();
//   if (winner) {
//     break;
//   }
// }
// <<<-------------------------------------------------------------------------- alert(winnerwinnerchickendinner!)
//#endregion DOM INTERACTION: ALERT WINNER, END GAME

//#endregion WAR

//#region EVENT LISTENERS:

deckCard.addEventListener("click", () => {
  newDeck.shuffle();
  newDeck.deal(computer, player);

  deckCard.style.display = "none";

  computerPlayCard.style.display = "flex";
  playerPlayCard.style.display = "flex";
});

playerPlayCard.addEventListener("click", () => {
  computerDiscard.style.display = "flex";
  playerDiscard.style.display = "flex";

  battle(computer, player);
});

// click event for player discard pile to reshuffle when playing cards have run out:
playerDiscard.addEventListener("click", () => {
  // remove player and computer discard piles from DOM (should be replaced when player clicks playing card to go again)
  computerDiscard.style.display = "none";
  playerDiscard.style.display = "none";
  // then reshuffle discard pile
  reshuffleDiscardPile(
    computer.discardPile,
    player.discardPile,
    computer.hand,
    player.hand
  );
  // then show playing cards again
  computerPlayCard.innerHTML = `<img src="https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523440/PlayingCards/war-deck-png/backs/red.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
  playerPlayCard.innerHTML = `<img src="https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523440/PlayingCards/war-deck-png/backs/red.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
  computerPlayCard.style.display = "flex";
  playerPlayCard.style.display = "flex";
  // at this point, this works - BUT only the first time around... hm
});
//#endregion EVENT LISTENERS
