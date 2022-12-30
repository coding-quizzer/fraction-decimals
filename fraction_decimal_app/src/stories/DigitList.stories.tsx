import { RepeatingDecimalObject } from "../../../fractionDecimalFunctions";
import DigitList from "../components/DigitList";

const repeatingDecimalObject: RepeatingDecimalObject = {
  repeatingDigits: [
    {
      baseNumerator: 1,
      quotient: 1,
    },
    {
      baseNumerator: 3,
      quotient: 4,
    },
    {
      baseNumerator: 2,
      quotient: 2,
    },
    {
      baseNumerator: 6,
      quotient: 8,
    },
    {
      baseNumerator: 4,
      quotient: 5,
    },
    {
      baseNumerator: 5,
      quotient: 7,
    },
  ],
};

const nonRepeatingDecimalObject: RepeatingDecimalObject = {
  nonRepeatingDigits: [
    {
      baseNumerator: 1,
      quotient: 1,
    },
    {
      baseNumerator: 2,
      quotient: 2,
    },
    {
      baseNumerator: 4,
      quotient: 5,
    },
  ],
};

const repeatingNonRepeatingComboObject: RepeatingDecimalObject = {
  nonRepeatingDigits: [
    {
      baseNumerator: 1,
      quotient: 0,
    },
  ],

  repeatingDigits: [
    {
      baseNumerator: 10,
      quotient: 1,
    },
  ],
};

export default {
  title: "DigitList",
  component: DigitList,
};

export const RepeatingDecimal = () => <DigitList digits={repeatingDecimalObject} />;
export const NonRepeatingDecimal = () => <DigitList digits={nonRepeatingDecimalObject} />;
export const Combination_Limit_4 = () => (
  <DigitList digits={repeatingNonRepeatingComboObject} limit={4} />
);
