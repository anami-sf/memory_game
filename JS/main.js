var cards =[
    {
        name: "queen",
        suit: "hearts",
        image: "images/queen-of-hearts.png"
    }, {
        name: "queen",
        suit: "diamonds",
        image: "images/queen-of-diamonds.png"
    }, {
        name: "king",
        suit: "hearts",
        image: "images/king-of-hearts.png"
    }, {
        name: "king",
        suit: "diamonds",
        image: "images/king-of-diamonds.png"
    }  
];
var cardsInPlay = [];

const checkForMatch = () => {
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log("Sorry, try again");
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
flipCard(2)

