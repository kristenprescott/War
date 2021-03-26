# Card game: War

An in-browser game written in Javascript.

---

## Project link

[Game of War](https://kristenprescott.github.io/War_Card_Game/)

![Screenshot](https://res.cloudinary.com/dp1pjn2sy/image/upload/v1616747150/other/WarRules_daooct.png)

---

## Project Description

A game of war played against the computer. Click "Play" to begin. The deck is shuffled and dealt, half to the player and half to the opponent. Then, the battle begins.

The card count in the bottom corners keeps track of the current scores, the number of cards currently accumulated in hand and in the discard pile. Once either player or opponent has run out of cards in hand, the discard pile is reshuffled and returned to the hand to continue playing.

Once either player or computer has run out of cards, a winner is proclaimed! The game may be replayed at this point.

#### Additional features:

- Change the design of deck - choose from nine different patterns
- The collapsable side menu also has the option to view the rules of the game

---

# Code Snippets

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

###Construction of the deck:

```
const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];

      const ranks = [
        "A","2","3","4","5","6","7","8","9","10","J","Q","K",
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
```

### Shuffling the deck:

```
    shuffle = (deck) => {
      for (let i = 0; i < 169; i++) {
        let first = Math.floor(Math.random() * deck.length);
        let second = Math.floor(Math.random() * deck.length);
        let temp = deck[first];

        deck[first] = deck[second];
        deck[second] = temp;
      }
    };
```
