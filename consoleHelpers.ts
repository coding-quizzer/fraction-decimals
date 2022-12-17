import { RepeatingDecimalObject } from "./fractionDecimalFunctions";
export const convertFractionToTuple = (stringFraction: string): [number, number] => {
  let numerator: number = 0;
  let denominator: number;
  let currentNumber: string = "";
  if (!stringFraction) throw Error("Argument is empty. Please supply an of the form a/b");
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

export const convertDecimalObjectToString = (
  decimalObject: RepeatingDecimalObject
): string => {
  let decimalString: string = "0.";
  if (decimalObject.nonRepeatingDigits) {
    for (const digit of decimalObject.nonRepeatingDigits) {
      decimalString += String(digit.quotient);
    }
  }

  if (decimalObject.repeatingDigits) {
    decimalString += "|";

    for (const digit of decimalObject.repeatingDigits) {
      decimalString += String(digit.quotient);
    }
  }
  return decimalString;
};
