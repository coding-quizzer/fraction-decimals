import { getUniqueDecimals, RepeatingDecimalObject } from "../fractionDecimalFunctions";
import { convertDecimalObjectToString } from "../consoleHelpers";

const denominator: string = process.argv[2];

const decimalList: RepeatingDecimalObject[] = getUniqueDecimals(Number(denominator));

for (const decimal of decimalList) {
  console.log(
    `Numerator: ${
      decimal.nonRepeatingDigits
        ? decimal.nonRepeatingDigits[0].baseNumerator
        : decimal.repeatingDigits
        ? decimal.repeatingDigits[0].baseNumerator
        : null
    }`
  );
  console.log(convertDecimalObjectToString(decimal));
  console.log();
}
