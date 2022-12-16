import { generateDecimalExpansion } from "./fractionDecimalFunctions";

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
