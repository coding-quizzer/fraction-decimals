import { Fraction } from "../../../../fractionDecimalFunctions";
import { convertFractionToRepeatingDecimal } from "../../../../fractionDecimalFunctions";
import "./index.scss";
import DigitList from "./DigitList";
import NumberContainer from "../reusables/NumberContainer";
import NumberInput from "../reusables/NumberInput";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

type DecimalContainerProps = {
  fraction: Fraction;
};
export default function DecimalContainer(props: DecimalContainerProps) {
  const [numerator, denominator] = props.fraction;
  const [digitLimit, setDigitLimit] = useState("8");
  const [tempDigitLimit, setTempDigitLimit] = useState("8");
  useDebounce(() => setDigitLimit(tempDigitLimit));
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
          <NumberInput
            name="digit-limit"
            value={tempDigitLimit}
            setValue={setTempDigitLimit}
          />
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
