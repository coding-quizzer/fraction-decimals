import { RepeatingDecimalObject } from "./fractionDecimalFunctions";
import { convertFractionToRepeatingDecimal } from "./fractionDecimalFunctions";
import { convertFractionToTuple, convertDecimalObjectToString } from "./consoleHelpers";

const fractionString: string = process.argv[2];
const fractionTuple: [number, number] = convertFractionToTuple(fractionString);

const decimalObject: RepeatingDecimalObject =
  convertFractionToRepeatingDecimal(fractionTuple);
console.log(convertDecimalObjectToString(decimalObject));
