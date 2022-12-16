import { RepeatingDecimalObject } from "./fractionDecimalFunctions";
import { convertToRepeatingDecimal } from "./fractionDecimalFunctions";
import { convertFractionToTuple, convertDecimalObjectToString } from "./consoleHelpers";

const fractionString: string = process.argv[2];
const fractionTuple: [number, number] = convertFractionToTuple(fractionString);

const decimalObject: RepeatingDecimalObject = convertToRepeatingDecimal(fractionTuple);
console.log(convertDecimalObjectToString(decimalObject));
