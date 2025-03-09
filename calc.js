const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, operator, num2) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default: return 'Error: Invalid operator';
    }
}

function askQuestion() {
    rl.question('Enter expression (e.g., 5 + 3): ', (input) => {
        const parts = input.split(' ');
        if (parts.length !== 3) {
            console.log('Invalid input. Use format: number operator number');
            return askQuestion();
        }

        const num1 = parseFloat(parts[0]);
        const operator = parts[1];
        const num2 = parseFloat(parts[2]);

        if (isNaN(num1) || isNaN(num2)) {
            console.log('Error: Invalid number');
            return askQuestion();
        }

        console.log(`Result: ${calculate(num1, operator, num2)}`);
        askQuestion();
    });
}

askQuestion();