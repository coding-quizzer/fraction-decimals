import { RepeatingDecimalObject } from "../../../fractionDecimalFunctions";
import DecimalDigit from "./DecimalDigit";
type DigitListProps = {
  digits: RepeatingDecimalObject;
};

const extractDecimalDigits = (
  decimalObject: RepeatingDecimalObject,
  limit: number = 8
): number[] => {
  const decimalExpansion: number[] = [];
  const { nonRepeatingDigits, repeatingDigits } = decimalObject;

  for (let index = 0; index < limit; index++) {
    console.log("NonRepeating digits", nonRepeatingDigits);
    if (nonRepeatingDigits && nonRepeatingDigits[index]) {
      decimalExpansion.push(nonRepeatingDigits[index].quotient);
      continue;
    }

    if (!repeatingDigits) return decimalExpansion;

    decimalExpansion.push(repeatingDigits[index % repeatingDigits.length].quotient);
  }

  return decimalExpansion;
};

export default function DigitList(props: DigitListProps) {
  const digits: RepeatingDecimalObject = {};
  return (
    <div className="decimal">
      {extractDecimalDigits(props.digits).map((decimalDigit) => (
        <DecimalDigit>{decimalDigit}</DecimalDigit>
      ))}
    </div>
  );
}
