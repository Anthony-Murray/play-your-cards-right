    document.getElementById("start-game").addEventListener("click", function() {
        let playerName = document.getElementById("player-name").value;

        document.getElementById("player-name-input").style.display = "none";
        document.getElementById("game-content").style.display = "block";

        if (playerName) {
            alert(`Welcome, ${playerName}! Let's play...Play Your Cards Right!`);
        } else {
            alert("Welcome! Let's play...Play Your Cards Right!");
        }
    });
    