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
        cards[i].id = i
        board.appendChild(cardElement)
        cardElement.addEventListener('click', flipCard)
    }
}

// *** Task: remove flipped card from cards if it is a match

var cardsInPlay = [];
var cardsInPlayHTML = []
var matchedCards = [];

const checkForMatch = (card1, card2) => {

    if (cards[cardsInPlay[0]].rank === cards[cardsInPlay[1]].rank) {
        console.log("Cards: " + cards)            
        console.log("Cards in Play: " + cardsInPlay.length)
        matchedCards = matchedCards.concat(cardsInPlay)
        console.log("Matched Cards: " + matchedCards) 
        
        cardsInPlay = []
        cardsInPlayHTML = []
        console.log("You found a match!");
        
    } else {
        console.log("Sorry, try again");
        card1.src = "images/back.png"
        card2.src = "images/back.png"
        cardsInPlay = []
        cardsInPlayHTML = []
    }
}

const flipCard = (event) => {

    //Should be able to use "this" instaead of event.target
    var cardId = event.target.getAttribute('data-id');
  
    if (matchedCards.includes(cardId) != true) {
        
        event.target.src = cards[cardId].image
        console.log("User flipped " + cards[cardId].rank);
        cardsInPlay.push(cardId);
        cardsInPlayHTML.push(event.target)
        console.log("cardsInPlayHTML: " + cardsInPlayHTML)
        if (cardsInPlay.length === 2){
            checkForMatch(cardsInPlayHTML[0], cardsInPlayHTML[1])
        }
        
    }

}

createBoard()

