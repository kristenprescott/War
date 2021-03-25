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
  //#region COMPARE CARDS
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
  }
  if (computersCard.value > playersCard.value) {
    // console.log("computer wins with: " + computersCard.name);
    // <<<-------------------------------------------------------------------------- print 'you lost this battle, but you may win the war yet'
    // <<<-------------------------------------------------------------------------- explode playersCard
    player.hand.pop();
    computer.hand.pop();
    computer.discardPile.push(computersCard, playersCard);
  } else {
    // console.log("player wins with: " + playersCard.name);
    // <<<-------------------------------------------------------------------------- print 'you won this battle!'
    // <<<-------------------------------------------------------------------------- explode computersCard
    computer.hand.pop();
    player.hand.pop();
    player.discardPile.push(computersCard, playersCard);
  }
  //#endregion COMPARE CARDS

  computer.updateScore();
  player.updateScore();
  //   console.log("computer: ");
  //   console.log(computer.score);
  //   console.log("player: ");
  //   console.log(player.score);

  // print scores to DOM:
  //

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
    return winner;
  }
  //#endregion CHECK FOR WINNER

  //#region CHECK FOR EMPTY HANDS TO RESHUFFLE AND USE AS NEW HAND:
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
const deckCard = document.getElementById("deck-card");
const computerPlayCard = document.getElementById("computer-play-card");
const playerPlayCard = document.getElementById("player-play-card");
const computerDiscard = document.getElementById("computer-discard");
const playerDiscard = document.getElementById("player-discard");
const urlPrefix =
  "https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616523441/PlayingCards/war-deck-png/";

deckCard.addEventListener("click", () => {
  console.log(newDeck);
  // shuffle deck
  newDeck.shuffle();
  // deal
  newDeck.deal(computer, player);
  // remove deck from DOM
  deckCard.style.display = "none";
  // display the playing cards instead
  computerPlayCard.style.display = "flex";
  computerPlayCard.style.justifyContent = "space-evenly";
  playerPlayCard.style.display = "flex";
  playerPlayCard.style.justifyContent = "space-evenly";
});

// initial click player card in play click:
playerPlayCard.addEventListener("click", () => {
  // player card is replaced with current card being played
  //   console.log(player.playCard());
  const playerCardInPlay = player.playCard();
  //   console.log(playerCardInPlay);
  console.log(playerCardInPlay.id);
  playerPlayCard.innerHTML = `<img src="${urlPrefix}${playerCardInPlay.id}.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
  // computer card is also replaced
  const computerCardInPlay = computer.playCard();
  console.log(computerCardInPlay.id);
  computerPlayCard.innerHTML = `<img src="${urlPrefix}${computerCardInPlay.id}.png" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
  // computer-/player-discard should now display
  computerDiscard.style.display = "flex";
  playerDiscard.style.display = "flex";
  // battle
  battle(computer, player);
});
//#endregion EVENT LISTENERS
