import { Fraction } from "../../../../fractionDecimalFunctions";
import { convertFractionToRepeatingDecimal } from "../../../../fractionDecimalFunctions";
import "./index.scss";
import DigitList from "./DigitList";
import NumberContainer from "../reusables/NumberContainer";
import NumberInput from "../reusables/NumberInput";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

type DecimalContainerProps = {
  fraction: Fraction;
};

export default function DecimalContainer(props: DecimalContainerProps) {
  const [calculatedNumerator, setCalculatedNumerator] = useState<number>(
    props.fraction[0]
  );
  const [calculatedDenominator, setCalculatedDenominator] = useState<number>(
    props.fraction[1]
  );

  const [inputNumerator, setInputNumerator] = useState(props.fraction[0]);
  const [inputDenominator, setInputDenominator] = useState(props.fraction[1]);
  const [inputFraction, setInputFraction] = useState<[number | null, number | null]>(
    props.fraction
  );

  useDebounce(() =>
    setCalculatedNumerator((prev) => (inputFraction[0] ? inputFraction[0] : prev))
  );
  useDebounce(() =>
    setCalculatedDenominator((prev) => (inputFraction[1] ? inputFraction[1] : prev))
  );

  const [digitLimit, setDigitLimit] = useState<number | null>(8);
  const [tempDigitLimit, setTempDigitLimit] = useState<number | null>(8);
  useDebounce(() => setDigitLimit(tempDigitLimit));
  return (
    <div className="decimal-container">
      <header>
        <div className="decimal-container--label">
          <NumberInput
            name="numerator-container"
            value={inputFraction[0]}
            setValue={(numerator: number | null) =>
              setInputFraction((prev) => [numerator, prev[1]])
            }
          />
          <section>/</section>
          <NumberInput
            value={inputFraction[1]}
            name="denominator-container"
            setValue={(denominator: number | null) =>
              setInputFraction((prev) => [prev[0], denominator])
            }
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
