type Fraction = [number, number];
type DecimalPlace = {
  baseNumerator: number;
  quotient: number;
};

const fraction: Fraction = [1, 25];

export const generateDecimalExpansion = (
  fraction: Fraction
): { decimal: DecimalPlace[]; repeatBeginIndex: number | null } => {
  const [numerator, denominator]: [number, number] = fraction;
  let baseNumerator: number = numerator;
  let quotient: number = Math.floor((numerator * 10) / denominator);

  const decimal: DecimalPlace[] = [];

  let nextDecimal: DecimalPlace = {
    baseNumerator,
    quotient,
  };

  // let repeatedDecimal :number = quotient;

  while (
    nextDecimal.baseNumerator !== 0 &&
    !decimal
      .map((decimalPoint) => decimalPoint.baseNumerator)
      .includes(nextDecimal.baseNumerator)
  ) {
    decimal.push(nextDecimal);

    baseNumerator = (nextDecimal.baseNumerator * 10) % denominator;
    quotient = Math.floor((baseNumerator * 10) / denominator);

    nextDecimal = {
      baseNumerator,
      quotient,
    };
  }

  const repeatBeginIndex = decimal.findIndex(
    (decimalPlace) => decimalPlace.baseNumerator === nextDecimal.baseNumerator
  );

  const repeatingDecimal = repeatBeginIndex !== -1;

  return {
    decimal,
    repeatBeginIndex: repeatingDecimal ? repeatBeginIndex : null,
  };
};
