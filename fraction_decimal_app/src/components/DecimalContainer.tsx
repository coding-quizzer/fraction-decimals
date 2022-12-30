import { Fraction } from "../../../fractionDecimalFunctions";
import { convertFractionToRepeatingDecimal } from "../../../fractionDecimalFunctions";
import "./DecimalContainer.scss";
import DigitList from "./DigitList";

type DecimalContainerProps = {
  fraction: Fraction;
};
export function DecimalContainer(props: DecimalContainerProps) {
  return (
    <div className="decimal-container">
      <DigitList
        digits={convertFractionToRepeatingDecimal(props.fraction)}
        denominator={props.fraction[1]}
      />
    </div>
  );
}
