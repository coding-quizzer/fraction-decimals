import {
  convertToRepeatingDecimal,
  generateDecimalExpansion,
} from "./fractionDecimalFunctions";

describe(generateDecimalExpansion, () => {
  it("Returns object representation of 0.25 when fraction is 1/4", () => {
    expect(generateDecimalExpansion([1, 4])).toStrictEqual({
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
    });
  });

  it("Returns object representation of 0.222... when fraction is 2/9", () => {
    expect(generateDecimalExpansion([2, 9])).toStrictEqual({
      decimal: [
        {
          baseNumerator: 2,
          quotient: 2,
        },
      ],
      repeatBeginIndex: 0,
    });
  });
});

describe(convertToRepeatingDecimal, () => {
  const decimalExpansion = {};
  it("Returns an array of decimal objects representing 0.25 when for the decimal expansion object representing 1/4", () => {
    expect(
      convertToRepeatingDecimal({
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
      })
    ).toStrictEqual({
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
    expect(
      convertToRepeatingDecimal({
        decimal: [
          {
            baseNumerator: 2,
            quotient: 2,
          },
        ],
        repeatBeginIndex: 0,
      })
    ).toStrictEqual({
      repeatingDigits: [
        {
          baseNumerator: 2,
          quotient: 2,
        },
      ],
    });
  });

  it("Returns an array of decimal objects representing 0.0111... when for the decimal expansion object representing 1/9", () => {
    expect(
      convertToRepeatingDecimal({
        decimal: [
          {
            baseNumerator: 1,
            quotient: 0,
          },
          {
            baseNumerator: 10,
            quotient: 1,
          },
        ],
        repeatBeginIndex: 1,
      })
    ).toStrictEqual({
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
