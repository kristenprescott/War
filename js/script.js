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

// SHUFFLE FUNCTION
// note: shuffling deck 13x13 times - we'll be swapping around the suitValues(13),  a GOOD shuffle in a real deck is ~12, and I'm adding one for good measure/evenness. 13x13 = 169 ;) nice
const shuffle = (deck) => {
  for (let i = 0; i < 169; i++) {
    // first position:
    let first = Math.floor(Math.random() * deck.length);
    // second position:
    let second = Math.floor(Math.random() * deck.length);
    // temp location to store first position while second position is in its place:
    let temp = deck[first];

    // note: see if I can turn this into the fancy way Mathilda showed us on algorithm friday
    // swap first with second
    deck[first] = deck[second];
    // swap second with first value held in temp location
    deck[second] = temp;
  }
};

console.log(deck);
shuffle(deck);
console.log(deck);
// Success!!
