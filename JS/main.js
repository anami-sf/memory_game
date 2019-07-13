var cards =["queen", "queen", "king", "king"];
var cardsInPlay = [];

// Store all steps related to selecting and flipping over a card.
var flipCard = (card) => {

    //var cardOne = cards[0]; //First card flipped by player
    //var cardTwo = cards[2]; //Second card flipped by 
    //console.log("User flipped " + cardTwo);
    //cardsInPlay.push(cardTwo);

    cardsInPlay.push(card);
    console.log("User flipped " + card);
    console.log("Cards in play: " + cardsInPlay);
}

// Check if the two cards that the user has flipped over match each other.

var checkForMatch = () => {
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again");
        }
    }
}

flipCard(cards[0])
flipCard(cards[2])
checkForMatch()
