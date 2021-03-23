// DECK:
const suits = ["spades", "hearts", "clubs", "diamonds"];
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
const deck = [];
const getDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < suitValues.length; j++) {
      let card = { value: suitValues[j], suit: suits[i] };
      deck.push(card);
    }
  }
};
getDeck();

// SHUFFLE DECK:
const shuffle = (deck) => {
  for (let i = 0; i < 169; i++) {
    let first = Math.floor(Math.random() * deck.length);
    let second = Math.floor(Math.random() * deck.length);
    let temp = deck[first];

    deck[first] = deck[second];
    deck[second] = temp;
  }
};

// shuffle(deck);

// RENDER TO DOM:
// use placeholder text, add images later

// render deck to DOM:
const renderDeck = (deck) => {
  // deck div dom node:
  const deckContainer = document.getElementById("deck-container");
  // iterate over deck and make a div.card.card[i] + textContent = card[i] for each card
  for (let i = 0; i < deck.length; i++) {
    //create div.card.card[i] for all 52 cards:
    let cardDiv = document.createElement("div");
    console.log(cardDiv);
    cardDiv.classList = `${deck[i].value}${deck[i].suit} card`;
    cardDiv.textContent = `${deck[i].value}${deck[i].suit}`;
    // attach to deckContainer
    deckContainer.appendChild(cardDiv);
  }
};
renderDeck(deck);
