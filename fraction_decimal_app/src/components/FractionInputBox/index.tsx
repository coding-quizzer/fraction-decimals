import React, { useState } from "react";
import { Fraction } from "../../../../fractionDecimalFunctions";
import NumberInput from "../reusables/NumberInput";
import "./index.scss";
type FractionInputBoxProps = {
  onSubmit?: (fraction: Fraction) => void;
};

export default function FractionInputBox(props: FractionInputBoxProps) {
  const [numerator, setNumerator] = useState("");
  const [denominator, setDenominator] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (numerator && denominator) {
      props.onSubmit && props.onSubmit([Number(numerator), Number(denominator)]);
    }
    setNumerator("");
    setDenominator("");
  };
  return (
    <form className="fraction-input" onSubmit={handleSubmit}>
      <NumberInput name={"numerator"} value={numerator} setValue={setNumerator} />
      <section>/</section>
      <NumberInput name={"denominator"} value={denominator} setValue={setDenominator} />

      <button>Calculate</button>
    </form>
  );
}
