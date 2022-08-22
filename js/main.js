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

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);

    if (isNaN(inputFieldValue) === true) {
        alert("Please input a number.")
    } else {
        return inputFieldValue;
    }
}

// Calculate player expenses
document.getElementById("calculate-btn").addEventListener("click", function () {
    // Get player number
    const playerListContainer = document.getElementById("player-list-container");
    const playerNumber = playerListContainer.childElementCount;

    // Get per player pay amount
    const perPlayerPayAmount = getInputFieldValueById("per-player-pay-amount");

    // Get player expenses
    document.getElementById("player-expenses").innerText = playerNumber * perPlayerPayAmount;
})

// Calculate total expenses
document.getElementById("calculate-total-btn").addEventListener("click", function () {
    // Player expenses
    const playerExpensesString = document.getElementById("player-expenses").innerText;
    const playerExpenses = parseInt(playerExpensesString);

    // Manager expenses
    const managerPayAmount = getInputFieldValueById("manager-pay-amount");

    // Coach expenses
    const coachPayAmount = getInputFieldValueById("coach-pay-amount");

    // Total expenses
    const totalExpenses = playerExpenses + managerPayAmount + coachPayAmount;
    document.getElementById("total").innerText = totalExpenses;
})