function generateRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function generateFourRandomNumbers() {
  const randomNumbers = [];
  for (let i = 0; i < 4; i++) {
    const randomNumber = generateRandomNumbers(1, 9);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers.join('');
}
