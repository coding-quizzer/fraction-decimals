import React, { useState } from "react";
import { Fraction } from "../../../fractionDecimalFunctions";
import "./FractionInputBox.scss";
type FractionInputBoxProps = {
  onSubmit?: (fraction: Fraction) => void;
};

export default function FractionInputBox(props: FractionInputBoxProps) {
  const [numerator, setNumerator] = useState("");
  const [denominator, setDenominator] = useState("");

  const handleSubmit = (): void => {
    if (numerator && denominator) {
      props.onSubmit && props.onSubmit([Number(numerator), Number(denominator)]);
    }
    setNumerator("");
    setDenominator("");
  };
  return (
    <div className="fraction-input">
      <input
        name="numerator"
        value={numerator}
        onChange={(e) => {
          (!e.target.value || Number(e.target.value)) && setNumerator(e.target.value);
        }}
        type="number"
        style={{ width: numerator ? `${numerator.length * 0.6 + 1}em` : "1.6em" }}
        min={1}
      />
      <section>/</section>
      <input
        name="denominator"
        value={denominator}
        onChange={(e) => setDenominator(e.target.value)}
        style={{ width: denominator ? `${denominator.length * 0.6 + 1}em` : "1.6em" }}
        type="number"
        min={1}
      />

      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
}
