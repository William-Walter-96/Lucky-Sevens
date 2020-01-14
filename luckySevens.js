function checkErrors() {
    if (isNaN(document.forms["form"]["startingBet"].value) || Number(document.forms["form"]["startingBet"].value) <= 0) {
        alert("Starting Bet must be filled in with a number greater then 0.");
        document.forms["form"]["startingBet"].parentElement.className = "form-group has-error";
        document.forms["form"]["startingBet"].focus();
        return false;
    } else { return true;}
}

function clearErrors() {
    for (var loopCounter = 0; loopCounter < document.forms["form"].elements.length; loopCounter++) {
        if (document.forms["form"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
            document.forms["form"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function rollDice() {
    return ((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1));
}

function play() {
    clearErrors();
    //checkErrors();
    if (checkErrors()) {

        var money = Number(document.forms["form"]["startingBet"].value);
        var rollCount = 0;
        var moneyMax = money;
        var moneyMaxRollCount = 0;

        while (money > 0) {
            rollCount++;
            if (rollDice() == 7) {
                money = money + 4;
            } else {
                money = money - 1;
            }

            if (money > moneyMax) {
                moneyMax = money;
                moneyMaxRollCount = rollCount;
            }
        }

        document.getElementById("results").style.display = "block";
        document.getElementById("submitButton").innerText = "Play again";
        document.getElementById("resultStartingBet").innerText = "$" + Number(document.forms["form"]["startingBet"].value);
        document.getElementById("resultRollCount").innerText = rollCount;
        document.getElementById("resultMoneyMax").innerText = "$" + moneyMax;
        document.getElementById("resultMoneyMaxRollCount").innerText = moneyMaxRollCount;
        return false;
    } else {
        return false;
    }
}