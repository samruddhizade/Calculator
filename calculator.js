let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function setOperation(operation) {
    currentInput += ' ' + operation + ' ';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
    } catch (error) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
