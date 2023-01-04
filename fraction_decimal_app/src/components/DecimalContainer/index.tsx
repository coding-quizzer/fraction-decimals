import { Fraction } from "../../../../fractionDecimalFunctions";
import { convertFractionToRepeatingDecimal } from "../../../../fractionDecimalFunctions";
import "./index.scss";
import DigitList from "./DigitList";
import NumberContainer from "../reusables/NumberContainer";
import NumberInput from "../reusables/NumberInput";
import { useState } from "react";

type DecimalContainerProps = {
  fraction: Fraction;
};
export default function DecimalContainer(props: DecimalContainerProps) {
  const [numerator, denominator] = props.fraction;
  const [digitLimit, setDigitLimit] = useState("8");
  return (
    <div className="decimal-container">
      <header>
        <div className="decimal-container--label">
          <NumberContainer>{numerator}</NumberContainer>
          <section>/</section>
          <NumberContainer>{denominator}</NumberContainer>
        </div>
        <div className="decimal-container--limit">
          <label htmlFor={"digit-limit"}>Max Digits</label>
          <NumberInput name="digit-limit" value={digitLimit} setValue={setDigitLimit} />
        </div>
      </header>
      <DigitList
        digits={convertFractionToRepeatingDecimal(props.fraction)}
        denominator={denominator}
        limit={Number(digitLimit)}
      />
    </div>
  );
}
