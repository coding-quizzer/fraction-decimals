import { DecimalPlace, RepeatingDecimalObject } from "../../../fractionDecimalFunctions";
import DecimalDigit from "./DecimalDigit";
import "./DigitList.scss";
import NumberContainer from "./NumberContainer";
type DigitListProps = {
  digits: RepeatingDecimalObject;
  denominator: number;
  limit?: number;
};

const extractDecimalDigits = (
  decimalObject: RepeatingDecimalObject,
  limit: number = 8
): DecimalPlace[] => {
  const decimalExpansion: DecimalPlace[] = [];
  const { nonRepeatingDigits, repeatingDigits } = decimalObject;

  for (let index = 0; index < limit; index++) {
    console.log("NonRepeating digits", nonRepeatingDigits);
    if (nonRepeatingDigits && nonRepeatingDigits[index]) {
      decimalExpansion.push(nonRepeatingDigits[index]);
      continue;
    }

    if (!repeatingDigits) return decimalExpansion;

    decimalExpansion.push(repeatingDigits[index % repeatingDigits.length]);
  }

  return decimalExpansion;
};

export default function DigitList(props: DigitListProps) {
  const digits: RepeatingDecimalObject = {};
  return (
    <div className="decimal">
      <NumberContainer>0</NumberContainer>
      <section>.</section>
      {extractDecimalDigits(props.digits, props.limit).map((decimalDigit) => (
        <DecimalDigit fraction={[decimalDigit.baseNumerator, props.denominator]}>
          {decimalDigit.quotient}
        </DecimalDigit>
      ))}
    </div>
  );
}
