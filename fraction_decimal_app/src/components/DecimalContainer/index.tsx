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
  const [calculatedNumerator, setCalculatedNumerator] = useState(props.fraction[0]);
  const [calculatedDenominator, setCalculatedDenominator] = useState(props.fraction[1]);

  const [inputNumerator, setInputNumerator] = useState(props.fraction[0]);
  const [inputDenominator, setInputDenominator] = useState(props.fraction[1]);

  useDebounce(() => setCalculatedNumerator(inputNumerator));
  useDebounce(() => setCalculatedDenominator(inputDenominator));

  const [digitLimit, setDigitLimit] = useState("8");
  const [tempDigitLimit, setTempDigitLimit] = useState("8");
  useDebounce(() => setDigitLimit(tempDigitLimit));
  return (
    <div className="decimal-container">
      <header>
        <div className="decimal-container--label">
          <NumberInput
            name="numerator-container"
            value={String(inputNumerator)}
            setValue={(numerator: string) => setInputNumerator(Number(numerator))}
          />
          <section>/</section>
          <NumberInput
            value={String(inputDenominator)}
            name="denominator-container"
            setValue={(denominator: string) => setInputDenominator(Number(denominator))}
          />
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
        digits={convertFractionToRepeatingDecimal([
          calculatedNumerator,
          calculatedDenominator,
        ])}
        denominator={calculatedDenominator}
        limit={Number(digitLimit)}
      />
    </div>
  );
}
