function calculateSum() {
    const inputNumbers = document.getElementById('inputNumbers').value;
    const numbers = inputNumbers.split(',').map(num => parseFloat(num.trim()));

    const isValidInput = numbers.every(num => !isNaN(num));

    if (isValidInput) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        document.getElementById('result').innerText = `Sum: ${sum}`;
    } else {
        document.getElementById('result').innerText = 'Provide only numbers';
    }
}
