//#region CLASSES

class Deck {
  constructor() {
    this.deck = [];
    this.deckLength = 0;

    const suits = ["spades", "hearts", "clubs", "diamonds"];

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

    suits.forEach((suit, s) => {
      ranks.forEach((rank, r) => {
        let card = {
          rank: ranks[r],
          suit: suits[s],
          value: r + 1,
          //   owner: "",
          name: `${rank} of ${suit}`,
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
  deal = (playerOne, playerTwo) => {
    this.shuffle();
    // give first half of deck to playerOne and the second half to playerTwo
    playerOne.hand = this.deck.splice(0, Math.ceil(this.deck.length / 2));
    playerTwo.hand = this.deck.splice(0, this.deck.length);

    // playerOne.hand.forEach((card) => {
    //   //for each card in player's hand assign ownership
    //   card.owner = playerOne.name;
    // });
    // playerTwo.hand.forEach((card) => {
    //   card.owner = playerTwo.name;
    // });
  };
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.cardPile = [];
    this.score = 0;
  }
  //methods
  playCard = () => {
    return this.hand[this.hand.length - 1];
  };
  updateScore = () => {
    this.score = this.hand.length + this.cardPile.length;
  };
}

//#endregion CLASSES

//#region INSTANCES

const newDeck = new Deck();
// console.log(newDeck.deck[0].name, newDeck.deck[22].name);

newDeck.shuffle();
// console.log(newDeck.deck[0].name, newDeck.deck[22].name);

const playerOne = new Player("Kristen");
const playerTwo = new Player("Paul");

//#endregion INSTANCES

//#region GAMEPLAY:

// ask for player name

// shuffle/deal
newDeck.deal(playerOne, playerTwo);

// take turn:
const takeTurn = () => {
  //
  const card1 = playerOne.playCard();
  const card2 = playerTwo.playCard();

  //   const card1Img = `./${card.id}.png`;
  //   const card2Img = `./PATH${card.id}.png`;
  //   const card1Div = document.createElement("div");
  //   card1Div.image source = card1Img;

  // compare cards:
  if (card1.value === card2.value) {
    // console.log("draw");
    playerOne.hand.pop();
    playerOne.cardPile.push(card1);
    playerTwo.hand.pop();
    playerTwo.cardPile.push(card2);
  } else if (card1.value > card2.value) {
    // console.log("playerOne wins with: " + card1.name);
    playerTwo.hand.pop();
    playerOne.hand.pop();
    playerOne.cardPile.push(card1, card2);
  } else {
    // console.log("playerTwo wins with: " + card2.name);
    playerOne.hand.pop();
    playerTwo.hand.pop();
    playerTwo.cardPile.push(card1, card2);
  }

  console.log("PlayerOne: ");
  //   console.log(playerOne.score);
  playerOne.updateScore();
  console.log(playerOne.score);
  console.log("PlayerTwo: ");
  //   console.log(playerTwo.score);
  playerTwo.updateScore();
  console.log(playerTwo.score);

  // check if players hands.length + players cardPile.length = deck.length
  if (
    playerOne.score === newDeck.deckLength ||
    playerTwo.score === newDeck.deckLength
  ) {
    // console.log("game over");
    const winner =
      playerOne.score === newDeck.deckLength ? playerOne : playerTwo;
    console.log(winner);
    return winner;
  }

  // check if players hands are empty
  if (playerOne.hand.length === 0) {
    // shuffle cardPile
    newDeck.shuffle(playerOne.cardPile);
    // push cardPile to hand
    playerOne.hand = playerOne.cardPile.splice(0, playerOne.cardPile.length);
  }
  if (playerTwo.hand.length === 0) {
    // shuffle cardPile
    newDeck.shuffle(playerTwo.cardPile);
    // push cardPile to hand
    playerTwo.hand = playerTwo.cardPile.splice(0, playerTwo.cardPile.length);
  }
};
for (let i = 0; i < 10000; i++) {
  const winner = takeTurn();
  if (winner) {
    break;
  }
}

// EVENT LISTENERS:
//
