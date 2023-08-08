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

function displayCard() {
    const currentCard = deck.pop(); 
    const cardImage = `assets/images/cards/${currentCard.value}_of_${currentCard.suit}.png`;
    document.getElementById("playing-card").innerHTML = `<img src="${cardImage}" alt="${currentCard.value} of ${currentCard.suit}">`;
    updateScoreboard();
}

function updateScoreboard() {
    console.log("Updating scoreboard with score, lives and cards remaining :", score, "lives remaining:", livesRemaining, "cards remaining:", deck.length);
    document.getElementById("score").textContent = score;
    document.getElementById("lives-remaining").textContent = livesRemaining;
    document.getElementById("cards-remaining").textContent = deck.length;
}

function getValue(cardValue) { /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt*/
    if (cardValue === 'Ace') return 14;
    if (cardValue === 'King') return 13;
    if (cardValue === 'Queen') return 12;
    if (cardValue === 'Jack') return 11;
    return parseInt(cardValue, 10);
}

function guessHigh() {
    const currentCard = deck.pop();
    const nextCard = deck[deck.length - 1];
    if (getValue(nextCard.value) > getValue(currentCard.value)) {
        score++;
    } else {
        livesRemaining--;
    }
    displayCard();
    updateScoreboard();
}

function guessLow() {
    const currentCard = deck.pop();
    const nextCard = deck[deck.length - 1];
    if (getValue(nextCard.value) < getValue(currentCard.value)) {
        score++;
    } else {
        livesRemaining--;
    }
    displayCard();
    updateScoreboard();
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
    displayCard();
    updateScoreboard();
});

document.querySelector("[data-action='higher']").addEventListener("click", guessHigh);
document.querySelector("[data-action='lower']").addEventListener("click", guessLow);

/*function shuffleDeck() {*/


/*function displayCard() {*/


/*function guesshigh() {

}*/

/*function guesslow() {

}*/

function gamewin() {

}

function gameover() {

}

function gamereset() {

}


    