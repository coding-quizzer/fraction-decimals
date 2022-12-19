export type Fraction = [number, number];
export type DecimalPlace = {
  baseNumerator: number;
  quotient: number;
};

export type DecimalExpansionObject = {
  decimal: DecimalPlace[];
  repeatBeginIndex: number | null;
};

export type RepeatingDecimalObject = {
  nonRepeatingDigits?: DecimalPlace[];
  repeatingDigits?: DecimalPlace[];
};
/**
 * Generates an array object with the information neccesary to produce the decimal expansion.
 * @param {[numerator, denominator]} fraction (tuple representation of a fraction.)
 * @returns {
 *  {
 *    decimal: [{
 *      baseNumerator: number
 *       (
 *          Base numerator represents the numerator that coresponds to the
 *          decimal where that digit is the first digit after the decimal point. For example since 1/7 = 0.142857,
 *          the first one in 142857 has a base numerator of 1 and the 4 has a base numerator of 3 since 3/7 = 0.428571...
 *       )
 *
 *       quotient: number (the numerical value of the digit itself)
 *    }],
 *
 *    repeatBeginIndex: number (the index of the first digit in the number's repeating decimal)
 *
 *  }
 * }
 **/

export const generateDecimalExpansion = (fraction: Fraction): DecimalExpansionObject => {
  const [numerator, denominator]: [number, number] = fraction;
  let baseNumerator: number = numerator;
  let quotient: number = Math.floor((numerator * 10) / denominator);

  const decimal: DecimalPlace[] = [];

  let nextDecimal: DecimalPlace = {
    baseNumerator,
    quotient,
  };

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

  const repeatBeginIndex: number = decimal.findIndex(
    (decimalPlace) => decimalPlace.baseNumerator === nextDecimal.baseNumerator
  );

  const repeatingDecimal: boolean = repeatBeginIndex !== -1;

  return {
    decimal,
    repeatBeginIndex: repeatingDecimal ? repeatBeginIndex : null,
  };
};

const getNonrepeatingDigits = (
  decimal: DecimalPlace[],
  repeatBeginIndex: number | null
): DecimalPlace[] | null => {
  if (repeatBeginIndex === null) return [...decimal];
  const nonRepeatingDigits: DecimalPlace[] = [];
  for (let i = 0; i < repeatBeginIndex; i++) {
    nonRepeatingDigits.push(decimal[i]);
  }

  return nonRepeatingDigits[0] ? nonRepeatingDigits : null;
};

const getRepeatingDigits = (
  decimal: DecimalPlace[],
  repeatBeginIndex: number
): DecimalPlace[] => {
  const repeatingDigits = [];
  for (let i = repeatBeginIndex; i < decimal.length; i++) {
    repeatingDigits.push(decimal[i]);
  }

  return repeatingDigits;
};

/**
 *
 * @param {[numerator, denominator]} fraction (tuple representation of a fraction)
 * @returns {{
 *  nonRepeatingDigits: {
 *    [{
 *      baseNumerator: {number},
 *      quotient?: {number}
 *    }]
 *  } DecimalPlace[] (represents the decimal digits that do not repeat. Ex. since 1/14 = 0.0714285714285...
 *  0 is the one non-repeating decimal digit),
 *
 *  repeatingDigits?: {
 *   [{
 *      baseNumerator: {number},
 *      quotient?: {number}
 *    }]
 * } DecimalPlace[] (represents the decimal digits that do repeat. Ex. since 1/14 = 0.0714285714285...
 *  714285 are the repeating decimal digits),
 * }
 * }}
 */

export const convertToRepeatingDecimal = (fraction: Fraction): RepeatingDecimalObject => {
  const decimalExpansion = generateDecimalExpansion(fraction);
  const { decimal, repeatBeginIndex } = decimalExpansion;

  const repeatingDecimal: {
    nonRepeatingDigits?: DecimalPlace[];
    repeatingDigits?: DecimalPlace[];
  } = {};
  const nonRepeatingDigits = getNonrepeatingDigits(decimal, repeatBeginIndex);
  const repeatingDigits: null | DecimalPlace[] =
    repeatBeginIndex !== null ? getRepeatingDigits(decimal, repeatBeginIndex) : null;

  nonRepeatingDigits && (repeatingDecimal.nonRepeatingDigits = nonRepeatingDigits);
  repeatingDigits && (repeatingDecimal.repeatingDigits = repeatingDigits);

  return repeatingDecimal;
};

const addUniqueDecimalPoints = (
  fraction: Fraction,
  encounteredNumerators: { [key: string]: boolean }
) => {
  const { decimal } = generateDecimalExpansion(fraction);

  for (const { baseNumerator } of decimal) {
    if (!encounteredNumerators[baseNumerator]) {
      encounteredNumerators[baseNumerator] = true;
    }
  }

  return encounteredNumerators;
};

export const getUniqueNumerators = (denominator: number): number[] => {
  let encounteredNumerators: { [key: string]: boolean } = {};
  let currentNumerator: number = 1;
  // let decimalCount: number = 0;
  const uniqueNumerators: number[] = [];

  while (currentNumerator < denominator) {
    if (encounteredNumerators[currentNumerator]) {
      currentNumerator++;
      continue;
    }
    encounteredNumerators = addUniqueDecimalPoints(
      [currentNumerator, denominator],
      encounteredNumerators
    );
    uniqueNumerators.push(currentNumerator);
    currentNumerator++;
  }

  console.log(uniqueNumerators);

  return uniqueNumerators;
};

export const getUniqueDecimals = (denominator: number): RepeatingDecimalObject[] => {
  const decimals: RepeatingDecimalObject[] = [];
  const numerators: number[] = getUniqueNumerators(denominator);
  for (const numerator of numerators) {
    const newDecimal = convertToRepeatingDecimal([numerator, denominator]);
    // console.log(newDecimal);
    decimals.push(newDecimal);
  }
  return decimals;
};
