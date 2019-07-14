//Challange: add "reset" button and keep score

var cardsInPlay = [];
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

/* When a card is flipped we need to change the image src

1. select element
3. create function to update image src
2. create event listener

const flipCard = (cardId) => {


    console.log("User flipped " + cards[cardId].rank);
    
    //Add card flipped by plyer to cardsInPlay
    cardsInPlay.push(cards[cardId].rank);
    console.log("Cards in play: " + cardsInPlay);
    
    checkForMatch()
}

*/

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

const checkForMatch = () => {

    if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log("Sorry, try again");
            console.log("deck: " + cardsInPlay.length)
            cardsInPlay = []
        }
    }
}

const flipCard = (event) => {
    //Should be able to use "this" instaead of event.target
    var cardId = event.target.getAttribute('data-id');
    console.log("flipped Card: " + cardId)

    event.target.src = cards[cardId].image

    console.log("User flipped " + cards[cardId].rank);
    //Add card flipped by plyer to cardsInPlay
    cardsInPlay.push(cards[cardId].rank);
    console.log("Cards in play: " + cardsInPlay);
    checkForMatch()
}

createBoard()

