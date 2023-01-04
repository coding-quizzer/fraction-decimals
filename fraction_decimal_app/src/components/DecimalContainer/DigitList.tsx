import {
  DecimalPlace,
  RepeatingDecimalObject,
} from "../../../../fractionDecimalFunctions";
import DecimalDigit from "./DecimalDigit";
import "./DigitList.scss";
import NumberContainer from "../reusables/NumberContainer";
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
    const nonRepeatingDigitsLength = nonRepeatingDigits?.length || 0;
    if (nonRepeatingDigits && nonRepeatingDigits[index]) {
      decimalExpansion.push(nonRepeatingDigits[index]);
      continue;
    }

    if (!repeatingDigits) return decimalExpansion;

    decimalExpansion.push(
      repeatingDigits[(index - nonRepeatingDigitsLength) % repeatingDigits.length]
    );
  }

  return decimalExpansion;
};

export default function DigitList(props: DigitListProps) {
  const digits: RepeatingDecimalObject = {};
  const options = {
    denominator: props.denominator,
    limit: props.limit,
  };
  return (
    <div className="decimal">
      <NumberContainer>0</NumberContainer>
      <section>.</section>
      {extractDecimalDigits(props.digits, props.limit).map((decimalDigit, index) => (
        <DecimalDigit
          key={JSON.stringify({
            ...options,
            numerator: decimalDigit.baseNumerator,
            index,
          })}
          fraction={[decimalDigit.baseNumerator, props.denominator]}
        >
          {decimalDigit.quotient}
        </DecimalDigit>
      ))}
    </div>
  );
}
