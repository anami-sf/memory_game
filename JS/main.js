var cards =["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0]; //First card flipped by player
var cardTwo = cards[2]; //Second card flipped by player

//Add cardOne flipped by plyer to cardsInPlay
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("Cards in play: " + cardsInPlay);

if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again");
    }
}

