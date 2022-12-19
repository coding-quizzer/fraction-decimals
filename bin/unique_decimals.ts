import { getUniqueDecimals, RepeatingDecimalObject } from "../fractionDecimalFunctions";
import { convertDecimalObjectToString } from "../consoleHelpers";

const denominator: string = process.argv[2];

const decimalList: RepeatingDecimalObject[] = getUniqueDecimals(Number(denominator));

for (const decimal of decimalList) {
  console.log(convertDecimalObjectToString(decimal));
  console.log();
}
