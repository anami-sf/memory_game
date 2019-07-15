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
        if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
            alert("You found a match!");
            cardsInPlay = []
        } else {
            alert("Sorry, try again");
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
    cardsInPlay.push(cards[cardId]);
    console.log("Cards in play: " + cardsInPlay);
    checkForMatch()
}

createBoard()

