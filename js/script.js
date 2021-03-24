//#region CLASSES:
class Deck {
  constructor() {
    this.deck = [];

    const suits = ["spades", "hearts", "clubs", "diamonds"];
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
        console.log(r);
        let card = {
          rank: ranks[r],
          suit: suits[s],
          name: `${rank} of ${suit}`,
        };
        this.deck.push(card);
        console.log(card);
      });
    });
  }
  //methods
  shuffle = (deck) => {
    for (let i = 0; i < 169; i++) {
      let first = Math.floor(Math.random() * deck.length);
      let second = Math.floor(Math.random() * deck.length);
      let temp = deck[first];

      deck[first] = deck[second];
      deck[second] = temp;
    }
  };
}

const newDeck = new Deck();
newDeck.shuffle();

class Player {
  constructor(name) {
    this.name = name;
  }
  // methods:
  sayName = () => {
    console.log(this.name);
  };
}

const playerOne = new Player("computer");
const playerTwo = new Player("kristen");

playerOne.sayName();
playerTwo.sayName();

//#endregion CLASSES

//#region RENDER TO DOM:
// const renderDeck = (deck) => {
//   const deckContainer = document.getElementById("deck-container");
//   for (let i = 0; i < deck.length; i++) {
//     let cardDiv = document.createElement("div");
//     console.log(cardDiv);
//     cardDiv.classList = `${deck[i].value}${deck[i].suit} card`;
//     cardDiv.textContent = `${deck[i].value}${deck[i].suit}`;
//     deckContainer.appendChild(cardDiv);
//   }
// };
// renderDeck(newDeck.deck);
//#endregion RENDER TO DOM
