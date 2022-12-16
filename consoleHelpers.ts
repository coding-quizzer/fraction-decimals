export const convertFractionToTuple = (stringFraction: string): [number, number] => {
  let numerator: number = 0;
  let denominator: number;
  let currentNumber: string = "";
  for (const char of stringFraction) {
    if (!/[0-9]|\//.test(char)) {
      throw new Error(`${char} is an invalid character. Please only use numbers or \/.`);
    }

    if (char === "/") {
      numerator = Number(currentNumber);
      currentNumber = "";
    }

    char !== "/" && (currentNumber += char);
  }

  denominator = Number(currentNumber);

  if (denominator === 0) throw new Error("Can't divide by zero");

  return [numerator, denominator];
};
