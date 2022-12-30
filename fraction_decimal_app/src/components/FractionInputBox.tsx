import { useState } from "react";
import "./FractionInputBox.scss";
import NumberContainer from "./NumberContainer";
export default function FractionInputBox() {
  const [numerator, setNumerator] = useState("");
  const [denominator, setDenominator] = useState("");

  return (
    <div className="fraction-input">
      <input
        // className={"number-container"}
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
        // className={"number-container"}

        name="denominator"
        value={denominator}
        onChange={(e) => setDenominator(e.target.value)}
        style={{ width: denominator ? `${denominator.length * 0.6 + 1}em` : "1.6em" }}
        type="number"
        min={1}
      />

      <button>Calculate</button>
    </div>
  );
}
