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
    // Get player number
    const playerNumber = playerList();

    // Get per player pay amount
    const perPlayerPayAmount = document.getElementById("per-player-pay-amount").value;

    if (isNaN(perPlayerPayAmount) === true) {
        alert("Please input a number.")
    } else {
        // Get player expenses
        document.getElementById("player-expenses").innerText = playerNumber * perPlayerPayAmount;
    }
})

// Calculate total expenses
document.getElementById("calculate-total-btn").addEventListener("click", function () {
    // Player expenses
    const playerExpensesString = document.getElementById("player-expenses").innerText;
    const playerExpenses = parseInt(playerExpensesString);

    // Manager expenses
    const managerPayAmountString = document.getElementById("manager-pay-amount").value;
    const managerPayAmount = parseInt(managerPayAmountString);
    if (isNaN(managerPayAmount) === true) {
        alert("Please input a number.")
    }

    // Coach expenses
    const coachPayAmountString = document.getElementById("coach-pay-amount").value;
    const coachPayAmount = parseInt(coachPayAmountString);
    if (isNaN(coachPayAmount) === true) {
        alert("Please input a number.")
    }

    // Total expenses
    const totalExpenses = playerExpenses + managerPayAmount + coachPayAmount;
    document.getElementById("total").innerText = totalExpenses;
})