let displayValue = '';

const appendToDisplay = (value) => {
    displayValue += value;
    document.getElementById("numInput").value = displayValue;
    console.log(value)
}


const clearDisplay = () => {
    displayValue = '';
    document.getElementById("numInput").value = '';
}

const deleteOne = () => {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("numInput").value = displayValue;
}


const calculator = () => {
        try {
            const result = evaluateExpression(displayValue);
            document.getElementById("numInput").value = formatResult(result);
            displayValue = result.toString();
        } catch (error) {
            document.getElementById("numInput").value = 'ERROR';
        } 
    }


    function evaluateExpression(expression) {
        // This is a very simplified expression parser
        const operators = ['+', '-', '*', '/'];
        const operatorRegex = new RegExp(operators.map(op => `\\${op}`).join('|'), 'g');
        const tokens = expression.split(operatorRegex);
        const operatorsArr = expression.match(operatorRegex);

        while (operatorsArr && operatorsArr.length > 0) {
            const index = operators.findIndex(op => operatorsArr.includes(op));
            const operator = operators[index];
            const operatorIndex = operatorsArr.indexOf(operator);

            const num1 = parseFloat(tokens[operatorIndex]);
            const num2 = parseFloat(tokens[operatorIndex + 1]);
            const operation = operate(num1, num2, operator);

            tokens.splice(operatorIndex, 2, operation);
            operatorsArr.splice(operatorIndex, 1);
        }

        return parseFloat(tokens[0]);
    }

const operate = (num1, num2, operator) => {  
  switch (operator) {
    case '+':
        return num1 + num2;
    case '-':
        return num1 - num2;
    case '*':
        return num1 * num2;
    case '/':
        if(num2 !== 0){
            return num1 / num2;
        } else {
            throw new Error('Cannot Divide By Zero')
        }
        default:
            throw new Error('Invalid Operator')
  }
}

const formatResult = (result) => {
    if(result % 1 === 0){
        return result.toString()
    } else {
        return result.toFixed(1);
    }
}




















// const appendToDisplay = (value) => {
//     document.getElementById("numInput").value += value;
//     console.log(value)
// }


// const clearDisplay = () => {
//     document.getElementById("numInput").value = '';
// }

// const deleteOne = () => {
//     const display = document.getElementById('numInput');
//     display.value = display.value.slice(0, -1);
// }

// const calculator = () => {
//     const input = document.getElementById('numInput').value;
//     try {
//         const result = eval(input);
//         document.getElementById("numInput").value = result;
//     } catch (error) {
//         document.getElementById("numInput").value = 'ERROR';
//     } 
// }

