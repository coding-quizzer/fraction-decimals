import { RepeatingDecimalObject } from "../../../fractionDecimalFunctions";
import DigitList from "../components/DigitList";

const decimalPlaces: RepeatingDecimalObject = {
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

export default {
  title: "DigitList",
  component: DigitList,
};

export const Default = () => <DigitList digits={decimalPlaces} />;
