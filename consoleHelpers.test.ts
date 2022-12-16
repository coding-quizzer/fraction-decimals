import { convertFractionToTuple } from "./consoleHelpers";

describe(convertFractionToTuple, () => {
  it("Converts '10/17' to [10, 17]", () => {
    expect(convertFractionToTuple("10/17")).toStrictEqual([10, 17]);
  });
});
