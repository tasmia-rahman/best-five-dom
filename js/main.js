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

function getElementValueById(elementId, isInputField) {
    const element = document.getElementById(elementId);
    let elementValueString;
    if (isInputField === true) {
        elementValueString = element.value;
    } else {
        elementValueString = element.innerText;
    }
    const elementValue = parseInt(elementValueString);

    if (isNaN(elementValue) === true) {
        alert("Please input a number.")
    } else {
        return elementValue;
    }
}

// Calculate player expenses
document.getElementById("calculate-btn").addEventListener("click", function () {
    // Get player number
    const playerListContainer = document.getElementById("player-list-container");
    const playerNumber = playerListContainer.childElementCount;

    // Get per player pay amount
    const perPlayerPayAmount = getElementValueById("per-player-pay-amount", true);

    // Get player expenses
    document.getElementById("player-expenses").innerText = playerNumber * perPlayerPayAmount;
})

// Calculate total expenses
document.getElementById("calculate-total-btn").addEventListener("click", function () {
    // Player expenses
    const playerExpenses = getElementValueById("player-expenses", false);

    // Manager expenses
    const managerPayAmount = getElementValueById("manager-pay-amount", true);

    // Coach expenses
    const coachPayAmount = getElementValueById("coach-pay-amount", true);

    // Total expenses
    const totalExpenses = playerExpenses + managerPayAmount + coachPayAmount;
    document.getElementById("total").innerText = totalExpenses;
})