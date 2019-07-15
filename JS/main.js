//Challange: add "reset" button and keep score

var cards =[
    {
        rank: "queen",
        suit: "hearts",
        image: "images/queen-of-hearts.png"
    }, {
        rank: "queen",
        suit: "diamonds",
        image: "images/queen-of-diamonds.png"
    }, {
        rank: "king",
        suit: "hearts",
        image: "images/king-of-hearts.png"
    }, {
        rank: "king",
        suit: "diamonds",
        image: "images/king-of-diamonds.png"
    }  
];

var board = document.querySelector('#game-board');

const createBoard = () => {
    for (var i=0; i<cards.length; i++) {
        var cardElement = document.createElement('img')
        cardElement.src = "images/back.png";
        cardElement.setAttribute('data-id', i);
        board.appendChild(cardElement)
        cardElement.addEventListener('click', flipCard)
    }
}

// *** Task: Replace cardsInPlay with html elt

var cardsInPlayHTML = []
var matchedCards = [];

const checkForMatch = (cardOne, cardTwo) => {

    var cardOneId = cardOne.getAttribute('data-id');
    var cardTwoId = cardTwo.getAttribute('data-id');

    if (cards[cardOneId].rank === cards[cardTwoId].rank) {
        console.log("Cards: " + cards)            
        console.log("Cards in PlayHTML: " + cardsInPlayHTML.length)
        matchedCards = matchedCards.concat(cardsInPlayHTML)  //added HTML
        console.log("Matched Cards: " + matchedCards.length) 
        
        cardsInPlayHTML = []
        console.log("You found a match!");
        
    } else {
        console.log("Sorry, try again");
        cardOne.src = "images/back.png"
        cardTwo.src = "images/back.png"
        cardsInPlayHTML = []
    }
}

const flipCard = (event) => {

    //Should be able to use "this" instaead of event.target
    var cardId = event.target.getAttribute('data-id');
  
    if (matchedCards.includes(event.target) != true) { 
        event.target.src = cards[cardId].image
        console.log("User flipped " + cards[cardId].rank);
        cardsInPlayHTML.push(event.target)
        console.log("cardsInPlayHTML: " + cardsInPlayHTML)
        if (cardsInPlayHTML.length === 2){
            checkForMatch(cardsInPlayHTML[0], cardsInPlayHTML[1])
        }
        
    }

}

createBoard()

