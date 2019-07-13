var cards =["queen", "queen", "king", "king"];
// When cards are flipped they are added to array cardsInPlay
var cardsInPlay = [];

// Flip card
var flipCard = (card) => {
    
    console.log("User flipped " + card);
    //Add flipped card to the cardsInPlay array 
    cardsInPlay.push(card);
    console.log("Cards in play: " + cardsInPlay);
}

// Check if flipped cards match 
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
