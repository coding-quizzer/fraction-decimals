type Fraction = [number, number];
const fraction :Fraction = [1, 7];

const [numerator, denominator] : [number, number] = fraction;
let tempNumerator = numerator;
let quotient = Math.floor((tempNumerator * 10) / denominator);

const decimalExpansion :number[] = [0];
const initialRemainders :number[] = [];

while (tempNumerator !== 0 && !initialRemainders.includes(tempNumerator)) {

  decimalExpansion.push(quotient)
  initialRemainders.push(tempNumerator);

  tempNumerator = (tempNumerator * 10) % denominator;
  quotient = Math.floor((tempNumerator * 10) / denominator);

  console.log(initialRemainders);
  console.log(decimalExpansion);
}

console.log(initialRemainders);
console.log(decimalExpansion);
