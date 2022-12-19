import {
  convertToRepeatingDecimal,
  generateDecimalExpansion,
  DecimalExpansionObject,
  getUniqueNumerators,
  getUniqueDecimals,
} from "./fractionDecimalFunctions";

describe(generateDecimalExpansion, () => {
  it("Returns object representation of 0.25 when fraction is 1/4", () => {
    const expectedResult: DecimalExpansionObject = {
      decimal: [
        {
          baseNumerator: 1,
          quotient: 2,
        },
        {
          baseNumerator: 2,
          quotient: 5,
        },
      ],
      repeatBeginIndex: null,
    };

    expect(generateDecimalExpansion([1, 4])).toStrictEqual(expectedResult);
  });

  it("Returns object representation of 0.222... when fraction is 2/9", () => {
    const expectedResult: DecimalExpansionObject = {
      decimal: [
        {
          baseNumerator: 2,
          quotient: 2,
        },
      ],
      repeatBeginIndex: 0,
    };
    expect(generateDecimalExpansion([2, 9])).toStrictEqual(expectedResult);
  });
});

describe(convertToRepeatingDecimal, () => {
  const decimalExpansion = {};
  it("Returns an array of decimal objects representing 0.25 when for the decimal expansion object representing 1/4", () => {
    expect(convertToRepeatingDecimal([1, 4])).toStrictEqual({
      nonRepeatingDigits: [
        {
          baseNumerator: 1,
          quotient: 2,
        },
        {
          baseNumerator: 2,
          quotient: 5,
        },
      ],
    });
  });

  it("Returns an array of decimal objects representing 0.222... when for the decimal expansion object representing 2/9", () => {
    expect(convertToRepeatingDecimal([2, 9])).toStrictEqual({
      repeatingDigits: [
        {
          baseNumerator: 2,
          quotient: 2,
        },
      ],
    });
  });

  it("Returns an array of decimal objects representing 0.0111... when for the decimal expansion object representing 1/9", () => {
    expect(convertToRepeatingDecimal([1, 90])).toStrictEqual({
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
    });
  });
});

describe(getUniqueNumerators, () => {
  it("Returns 4 when denominator is 5", () => {
    expect(getUniqueNumerators(5)).toStrictEqual([1, 2, 3, 4]);
  });
  it("Returns 1 when denomenator is 7", () => {
    expect(getUniqueNumerators(7)).toStrictEqual([1]);
  });
});

describe(getUniqueDecimals, () => {
  it("Returns the decimals for 5", () => {
    expect(getUniqueDecimals(5)).toStrictEqual([
      {
        nonRepeatingDigits: [
          {
            baseNumerator: 1,
            quotient: 2,
          },
        ],
      },
      {
        nonRepeatingDigits: [
          {
            baseNumerator: 2,
            quotient: 4,
          },
        ],
      },
      {
        nonRepeatingDigits: [
          {
            baseNumerator: 3,
            quotient: 6,
          },
        ],
      },
      {
        nonRepeatingDigits: [
          {
            baseNumerator: 4,
            quotient: 8,
          },
        ],
      },
    ]);
  });

  it("Returns the decimal for 7", () => {
    expect(getUniqueDecimals(7)).toStrictEqual([
      {
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
      },
    ]);
  });
});
