//#region CARD BACK DESIGN SELECTION:

// callback functions for click events:
//red:
const handleRedDesignChange = () => {
  // deck card
  const redDesign = document.createElement("img");
  redDesign.style.display = "flex";
  redDesign.style.justifyContent = "space-around";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}red.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  const redComputerDesign = document.createElement("img");
  redComputerDesign.style.display = "flex";
  redComputerDesign.style.justifyContent = "space-around";
  redComputerDesign.style.boxShadow =
    "-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}red.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const redPlayerDesign = document.createElement("img");
  redPlayerDesign.style.display = "flex";
  redPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}red.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer play card
  const redComputerPlayDesign = document.createElement("img");
  redComputerPlayDesign.style.display = "flex";
  redComputerDesign.style.justifyContent = "space-around";
  const computerPlayCard = document.getElementById("computer-play-card");
  computerPlayCard.innerHTML = `<img src="${imgBackPrefix}red.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player play card
  const redPlayerPlayDesign = document.createElement("img");
  redPlayerPlayDesign.style.display = "flex";
  redPlayerDesign.style.justifyContent = "space-around";
  const playerPlayCard = document.getElementById("player-play-card");
  playerPlayCard.innerHTML = `<img src="${imgBackPrefix}red.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//blue:
const handleBlueDesignChange = () => {
  // deck card
  const blueDesign = document.createElement("img");
  blueDesign.style.display = "flex";
  blueDesign.style.justifyContent = "space-around";
  blueDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}blue.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const blueComputerDesign = document.createElement("img");
  blueComputerDesign.style.display = "flex";
  blueComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}blue.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const bluePlayerDesign = document.createElement("img");
  bluePlayerDesign.style.display = "flex";
  bluePlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}blue.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer play card
  const blueComputerPlayDesign = document.createElement("img");
  blueComputerPlayDesign.style.display = "flex";
  blueComputerDesign.style.justifyContent = "space-around";
  const computerPlayCard = document.getElementById("computer-play-card");
  computerPlayCard.innerHTML = `<img src="${imgBackPrefix}blue.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
  // player play card
  const bluePlayerPlayDesign = document.createElement("img");
  bluePlayerPlayDesign.style.display = "flex";
  bluePlayerDesign.style.justifyContent = "space-around";
  const playerPlayCard = document.getElementById("player-play-card");
  playerPlayCard.innerHTML = `<img src="${imgBackPrefix}blue.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//abstract:
const handleAbstractDesignChange = () => {
  // deck card
  const abstractDesign = document.createElement("img");
  abstractDesign.style.display = "flex";
  abstractDesign.style.justifyContent = "space-around";
  abstractDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}abstract.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const abstractComputerDesign = document.createElement("img");
  abstractComputerDesign.style.display = "flex";
  abstractComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}abstract.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const abstractPlayerDesign = document.createElement("img");
  abstractPlayerDesign.style.display = "flex";
  abstractPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}abstract.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer play card
  const abstractComputerPlayDesign = document.createElement("img");
  abstractComputerPlayDesign.style.display = "flex";
  abstractComputerDesign.style.justifyContent = "space-around";
  const computerPlayCard = document.getElementById("computer-play-card");
  computerPlayCard.innerHTML = `<img src="${imgBackPrefix}abstract.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player play card
  const abstractPlayerPlayDesign = document.createElement("img");
  abstractPlayerPlayDesign.style.display = "flex";
  abstractPlayerDesign.style.justifyContent = "space-around";
  const playerPlayCard = document.getElementById("player-play-card");
  playerPlayCard.innerHTML = `<img src="${imgBackPrefix}abstract.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//abstractClouds:
const handleAbstractCloudsDesignChange = () => {
  // deck card
  const abstractCloudsDesign = document.createElement("img");
  abstractCloudsDesign.style.display = "flex";
  abstractCloudsDesign.style.justifyContent = "space-around";
  abstractCloudsDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}abstractclouds.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const abstractCloudsComputerDesign = document.createElement("img");
  abstractCloudsComputerDesign.style.display = "flex";
  abstractCloudsComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}abstractclouds.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const abstractCloudsPlayerDesign = document.createElement("img");
  abstractCloudsPlayerDesign.style.display = "flex";
  abstractCloudsPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}abstractclouds.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer play card
  const abstractCloudsComputerPlayDesign = document.createElement("img");
  abstractCloudsComputerPlayDesign.style.display = "flex";
  abstractCloudsComputerDesign.style.justifyContent = "space-around";
  const computerPlayCard = document.getElementById("computer-play-card");
  computerPlayCard.innerHTML = `<img src="${imgBackPrefix}abstractClouds.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player play card
  const abstractCloudsPlayerPlayDesign = document.createElement("img");
  abstractCloudsPlayerPlayDesign.style.display = "flex";
  abstractCloudsPlayerDesign.style.justifyContent = "space-around";
  const playerPlayCard = document.getElementById("player-play-card");
  playerPlayCard.innerHTML = `<img src="${imgBackPrefix}abstractClouds.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//abstractScene:
const handleAbstractSceneDesignChange = () => {
  // deck card
  const abstractSceneDesign = document.createElement("img");
  abstractSceneDesign.style.display = "flex";
  abstractSceneDesign.style.justifyContent = "space-around";
  abstractSceneDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}abstractscene.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const abstractSceneComputerDesign = document.createElement("img");
  abstractSceneComputerDesign.style.display = "flex";
  abstractSceneComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}abstractscene.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const abstractScenePlayerDesign = document.createElement("img");
  abstractScenePlayerDesign.style.display = "flex";
  abstractScenePlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}abstractscene.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer play card
  const abstractSceneComputerPlayDesign = document.createElement("img");
  abstractSceneComputerPlayDesign.style.display = "flex";
  abstractSceneComputerDesign.style.justifyContent = "space-around";
  const computerPlayCard = document.getElementById("computer-play-card");
  computerPlayCard.innerHTML = `<img src="${imgBackPrefix}abstractScene.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player play card
  const abstractScenePlayerPlayDesign = document.createElement("img");
  abstractScenePlayerPlayDesign.style.display = "flex";
  abstractScenePlayerDesign.style.justifyContent = "space-around";
  const playerPlayCard = document.getElementById("player-play-card");
  playerPlayCard.innerHTML = `<img src="${imgBackPrefix}abstractScene.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//cars:
const handleCarsDesignChange = () => {
  // deck card
  const carsDesign = document.createElement("img");
  carsDesign.style.display = "flex";
  carsDesign.style.justifyContent = "space-around";
  carsDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}cars.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const carsComputerDesign = document.createElement("img");
  carsComputerDesign.style.display = "flex";
  carsComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}cars.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const carsPlayerDesign = document.createElement("img");
  carsPlayerDesign.style.display = "flex";
  carsPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}cars.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer play card
  const carsComputerPlayDesign = document.createElement("img");
  carsComputerPlayDesign.style.display = "flex";
  carsComputerDesign.style.justifyContent = "space-around";
  const computerPlayCard = document.getElementById("computer-play-card");
  computerPlayCard.innerHTML = `<img src="${imgBackPrefix}cars.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player play card
  const carsPlayerPlayDesign = document.createElement("img");
  carsPlayerPlayDesign.style.display = "flex";
  carsPlayerDesign.style.justifyContent = "space-around";
  const playerPlayCard = document.getElementById("player-play-card");
  playerPlayCard.innerHTML = `<img src="${imgBackPrefix}cars.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//astronaut:
const handleAstronautDesignChange = () => {
  // deck card
  const astronautDesign = document.createElement("img");
  astronautDesign.style.display = "flex";
  astronautDesign.style.justifyContent = "space-around";
  astronautDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}astronaut.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const astronautComputerDesign = document.createElement("img");
  astronautComputerDesign.style.display = "flex";
  astronautComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}astronaut.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const astronautPlayerDesign = document.createElement("img");
  astronautPlayerDesign.style.display = "flex";
  astronautPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}astronaut.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer play card
  const astronautComputerPlayDesign = document.createElement("img");
  astronautComputerPlayDesign.style.display = "flex";
  astronautComputerDesign.style.justifyContent = "space-around";
  const computerPlayCard = document.getElementById("computer-play-card");
  computerPlayCard.innerHTML = `<img src="${imgBackPrefix}astronaut.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player play card
  const astronautPlayerPlayDesign = document.createElement("img");
  astronautPlayerPlayDesign.style.display = "flex";
  astronautPlayerDesign.style.justifyContent = "space-around";
  const playerPlayCard = document.getElementById("player-play-card");
  playerPlayCard.innerHTML = `<img src="${imgBackPrefix}astronaut.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//frog:
const handleFrogDesignChange = () => {
  // deck card
  const frogDesign = document.createElement("img");
  frogDesign.style.display = "flex";
  frogDesign.style.justifyContent = "space-around";
  frogDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}frog.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const frogComputerDesign = document.createElement("img");
  frogComputerDesign.style.display = "flex";
  frogComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}frog.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const frogPlayerDesign = document.createElement("img");
  frogPlayerDesign.style.display = "flex";
  frogPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}frog.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer play card
  const frogComputerPlayDesign = document.createElement("img");
  frogComputerPlayDesign.style.display = "flex";
  frogComputerDesign.style.justifyContent = "space-around";
  const computerPlayCard = document.getElementById("computer-play-card");
  computerPlayCard.innerHTML = `<img src="${imgBackPrefix}frog.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player play card
  const frogPlayerPlayDesign = document.createElement("img");
  frogPlayerPlayDesign.style.display = "flex";
  frogPlayerDesign.style.justifyContent = "space-around";
  const playerPlayCard = document.getElementById("player-play-card");
  playerPlayCard.innerHTML = `<img src="${imgBackPrefix}frog.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

//fish:
const handleFishDesignChange = () => {
  // deck card
  const fishDesign = document.createElement("img");
  fishDesign.style.display = "flex";
  fishDesign.style.justifyContent = "space-around";
  fishDesign.style.borderRadius = "1rem";
  const deckCard = document.getElementById("deck-card");
  deckCard.innerHTML = `<img src="${imgBackPrefix}fish.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer discard
  const fishComputerDesign = document.createElement("img");
  fishComputerDesign.style.display = "flex";
  fishComputerDesign.style.justifyContent = "space-around";
  const computerDiscard = document.getElementById("computer-discard");
  computerDiscard.innerHTML = `<img src="${imgBackPrefix}fish.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player discard
  const fishPlayerDesign = document.createElement("img");
  fishPlayerDesign.style.display = "flex";
  fishPlayerDesign.style.justifyContent = "space-around";
  const playerDiscard = document.getElementById("player-discard");
  playerDiscard.innerHTML = `<img src="${imgBackPrefix}fish.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  //computer play card
  const fishComputerPlayDesign = document.createElement("img");
  fishComputerPlayDesign.style.display = "flex";
  fishComputerDesign.style.justifyContent = "space-around";
  const computerPlayCard = document.getElementById("computer-play-card");
  computerPlayCard.innerHTML = `<img src="${imgBackPrefix}fish.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;

  // player play card
  const fishPlayerPlayDesign = document.createElement("img");
  fishPlayerPlayDesign.style.display = "flex";
  fishPlayerDesign.style.justifyContent = "space-around";
  const playerPlayCard = document.getElementById("player-play-card");
  playerPlayCard.innerHTML = `<img src="${imgBackPrefix}fish.png" width="180" height="260" style="box-shadow:-1rem -1rem 1rem 0px rgba(0, 0, 0, 0.7);"></img>`;
};

// click events:
red.addEventListener("click", handleRedDesignChange);
blue.addEventListener("click", handleBlueDesignChange);
abstract.addEventListener("click", handleAbstractDesignChange);
abstractClouds.addEventListener("click", handleAbstractCloudsDesignChange);
abstractScene.addEventListener("click", handleAbstractSceneDesignChange);
cars.addEventListener("click", handleCarsDesignChange);
astronaut.addEventListener("click", handleAstronautDesignChange);
frog.addEventListener("click", handleFrogDesignChange);
fish.addEventListener("click", handleFishDesignChange);

//#endregion RENDER CARDS IN PLAY

//#region EVENT LISTENERS:

//#endregion EVENT LISTENERS

// //#region MODAL:
// // select the open-btn button
// let openBtn = document.getElementById("rules-btn-container");
// // select the modal-background
// let modalBackground = document.getElementById("modal-background");
// // select the close-btn
// let closeBtn = document.getElementById("close-btn");

// // shows the modal when the user clicks open-btn
// openBtn.addEventListener("click", function () {
//   modalBackground.style.display = "block";
// });

// // hides the modal when the user clicks close-btn
// closeBtn.addEventListener("click", function () {
//   modalBackground.style.display = "none";
// });

// // hides the modal when the user clicks outside the modal
// window.addEventListener("click", function (event) {
//   // check if the event happened on the modal-background
//   if (event.target === modalBackground) {
//     // hides the modal
//     modalBackground.style.display = "none";
//   }
// });

// //#endregion MODAL
