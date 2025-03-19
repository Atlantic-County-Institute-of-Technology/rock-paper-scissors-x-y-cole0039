function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    document.getElementById('result').textContent = randomNumber;
}