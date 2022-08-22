// Creating player list
const selectButtons = document.getElementsByClassName("select-btn");

for (const selectButton of selectButtons) {
    selectButton.addEventListener("click", function (event) {
        // Disable button
        event.target.setAttribute("disabled", true);

        // Get player name
        const playerName = event.target.parentNode.firstElementChild.innerText;

        // Create player list
        const li = document.createElement("li");
        li.innerText = playerName;

        // Append the list
        const playerListContainer = document.getElementById("player-list-container");
        const playerNumber = playerListContainer.childElementCount + 1;
        if (playerNumber > 5) {
            alert("Can not add more than five players");
        } else {
            playerListContainer.appendChild(li);
        }
    })
}

function playerList() {
    const playerListContainer = document.getElementById("player-list-container");
    return playerListContainer.childElementCount;
}

// Calculate player expenses
document.getElementById("calculate-btn").addEventListener("click", function () {
    const playerNumber = playerList();
    const perPlayerPayAmount = document.getElementById("per-player-pay-amount").value;
    document.getElementById("player-expenses").innerText = playerNumber * perPlayerPayAmount;
})
