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

    scoreBoard.textContent = "0"

    for (var i=0; i<cards.length; i++) {
        var cardElement = document.createElement('img')
        cardElement.className = "card"
        cardElement.src = "images/back.png";
        cardElement.setAttribute('data-id', i);
        board.appendChild(cardElement)
        cardElement.addEventListener('click', flipCard)
    }
}

// *** Task: create score function

var cardsInPlayHTML = []
var matchedCards = [];
const scoreBoard = document.querySelector('#score')
var score = 0


const flipBack = (card) => {
    card.src = "images/back.png"
}

const checkForMatch = (cardOne, cardTwo) => {

    var cardOneId = cardOne.getAttribute('data-id');
    var cardTwoId = cardTwo.getAttribute('data-id');

    if (cards[cardOneId].rank === cards[cardTwoId].rank) {
        matchedCards = matchedCards.concat(cardsInPlayHTML)
        updateScore()
        cardsInPlayHTML = []
        console.log("You found a match!");
        
    } else {
        console.log("Sorry, try again");

        setTimeout(function() {
            flipBack(cardOne);
        }, 500);

 
        setTimeout(function() {
            flipBack(cardTwo);
        }, 500);

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
        if (cardsInPlayHTML.length === 2){
            window.setTimeout(checkForMatch(cardsInPlayHTML[0], cardsInPlayHTML[1]), 3000);
        }
        
    }

}

const reset = () => {

    for (var i=0; i < matchedCards.length; i++) {
        matchedCards[i].src = "images/back.png"       
    }

    if (cardsInPlayHTML.length > 0) {cardsInPlayHTML[0].src = "images/back.png"}

    matchedCards = []
    cardsInPlayHTML = []
    score = 0
    scoreBoard.textContent = "0"
}

document.querySelector('#reset').addEventListener('click', reset)

//Update html score board

const updateScore = () => {
    score += 1
    scoreBoard.textContent = score.toString()

}

createBoard()

