let score = 0;
let livesRemaining = 3;
let cardsRemaining = 52;
let deck = [];

function createDeck() { /*https://wsvincent.com/javascript-object-oriented-deck-cards/*/
    const suits = ['hearts', 'spades', 'clubs', 'diamonds'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }

    cardsRemaining = deck.length;
    console.log('Deck created:', deck);
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    console.log('Deck shuffled:', deck);
}

document.getElementById("start-game").addEventListener("click", function() {
    let playerName = document.getElementById("player-name").value;

    document.getElementById("player-name-input").style.display = "none";
    document.getElementById("game-content").style.display = "block";

    if (playerName) {
        alert(`Welcome, ${playerName}! Let's play...Play Your Cards Right!`);
    } else {
        alert("Welcome! Let's play...Play Your Cards Right!");
    }

    createDeck();
    shuffleDeck();
});

/*function shuffleDeck() {*/


function displayCard() {

}

function guesshigh() {

}

function guesslow() {

}

function gamewin() {

}

function gameover() {

}

function gamereset() {

}


    