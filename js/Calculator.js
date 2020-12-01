function operand() {

    // Assigning first and second number to a value
    let firstNum = parseInt(document.getElementById("numberOne").value);
    let secondNum = parseInt(document.getElementById("numberTwo").value);

    // Assigning the operator chosen for calculation to a variable
    let operator = document.getElementById("chosenOperator").value;

    // Produces an alert if any of the values are blank
    if (firstNum === "" || secondNum === "") {
        alert("You have left a value empty\nplease enter a number");
    }

    // Produces an alert if an operator hasnt been chosen
    if (operator == 0) {
        alert("You have not chosen an operator\nPlease pick an operator");
        return;
    }
    
    // Calculations based on operator selected
    if (operator === "*") {
        let calculation = firstNum * secondNum;
        document.getElementById("answer").innerHTML = calculation;
    } else if (operator === "/") {
        let calculation = firstNum / secondNum;
        document.getElementById("answer").innerHTML = calculation;
    } else if (operator === "+") {
        let calculation = firstNum + secondNum;
        document.getElementById("answer").innerHTML = calculation;
    } else if (operator === "-") {
        let calculation = firstNum - secondNum;
        document.getElementById("answer").innerHTML = calculation;
    }

    // Shows the result of the calculation 
    document.getElementById("output").style.display = "block";
}