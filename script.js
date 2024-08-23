function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (value === '±') {
        display.value = display.value ? `-${display.value}` : '';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearEntry() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
        expression = expression.replace(/pow\(([^,]+),\s*([^)]+)\)/g, 'Math.pow($1, $2)');
        expression = expression.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
        expression = expression.replace(/ln\(([^)]+)\)/g, 'Math.log($1)');
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function toggleTheme() {
    let calculator = document.querySelector('.calculator');
    let themeToggle = document.querySelector('.theme-toggle');
    calculator.classList.toggle('dark-mode');
    if (calculator.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
}
