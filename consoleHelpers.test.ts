import { convertFractionToTuple, convertDecimalObjectToString } from "./consoleHelpers";

describe(convertFractionToTuple, () => {
  it("Converts '10/17' to [10, 17]", () => {
    expect(convertFractionToTuple("10/17")).toStrictEqual([10, 17]);
  });
});

describe(convertDecimalObjectToString, () => {
  it("converts repeated decimal object for 1/90 to a string", () => {
    expect(
      convertDecimalObjectToString({
        nonRepeatingDigits: [{ baseNumerator: 1, quotient: 0 }],
        repeatingDigits: [{ baseNumerator: 10, quotient: 1 }],
      })
    ).toEqual("0.0|1");
  });

  it("converts repeated decimal object for 2/9 to a string", () => {
    expect(
      convertDecimalObjectToString({
        repeatingDigits: [{ baseNumerator: 2, quotient: 2 }],
      })
    ).toEqual("0.|2");
  });

  it("converts repeated decimal object for 1/25 to a string", () => {
    expect(
      convertDecimalObjectToString({
        nonRepeatingDigits: [
          { baseNumerator: 1, quotient: 0 },
          { baseNumerator: 10, quotient: 4 },
        ],
      })
    ).toEqual("0.04");
  });
});
