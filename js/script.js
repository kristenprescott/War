console.log("im linked js");
// DECK
//build array of suits:
const suits = ["spades", "hearts", "clubs", "diamonds"];
// build array of card values:
const suitValues = [
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
// declare empty deck array:
deck = [];
// make deck function:
const getDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < suitValues.length; j++) {
      let card = { valur: suitValues[j], suit: suits[i] };
      deck.push(card);
    }
  }
};

getDeck();
// check:
console.log(deck);
// I now have an array(deck) of objects(cards with value and suit values)
// Success!!
