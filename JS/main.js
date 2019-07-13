var cards =["queen", "queen", "king", "king"];
var cardsInPlay = [];

const checkForMatch = () => {
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again");
        }
    }
}

const flipCard = (cardId) => {

    console.log("User flipped " + cards[cardId]);
    //Add cardOne flipped by plyer to cardsInPlay
    cardsInPlay.push(cards[cardId]);
    console.log("Cards in play: " + cardsInPlay);
    checkForMatch()
}

flipCard(0)
flipCard(1)
