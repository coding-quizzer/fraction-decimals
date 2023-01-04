import { Fraction } from "../../../fractionDecimalFunctions";
import { convertFractionToRepeatingDecimal } from "../../../fractionDecimalFunctions";
import "./DecimalContainer.scss";
import DigitList from "./DigitList";
import NumberContainer from "./reusables/NumberContainer";

type DecimalContainerProps = {
  fraction: Fraction;
};
export function DecimalContainer(props: DecimalContainerProps) {
  const [numerator, denominator] = props.fraction;
  return (
    <div className="decimal-container">
      <header>
        <NumberContainer>{numerator}</NumberContainer>
        <section>/</section>
        <NumberContainer>{denominator}</NumberContainer>
      </header>
      <DigitList
        digits={convertFractionToRepeatingDecimal(props.fraction)}
        denominator={denominator}
      />
    </div>
  );
}
