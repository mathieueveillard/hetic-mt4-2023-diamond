const createArrowOfChar = (char: string, n: number): string[] => {
  return new Array(n).fill(char);
};

const computeEquivalentIndex = (dimension: number, index: number): number => {
  return dimension - 1 - index;
};

export const makeRow = (dimension: number, index: number): string[] => {
  const numberOfStars = 1 + 2 * index;
  const numberOfSpaces = (dimension - numberOfStars) / 2;
  const stars = createArrowOfChar("*", numberOfStars);
  const spaces = createArrowOfChar(" ", numberOfSpaces);
  return [...spaces, ...stars, ...spaces];
};

const createTopHalfDiamond = (dimension: number): string[][] => {
  const result: string[][] = [];

  const middleLineIndex = (dimension - 1) / 2;

  for (let index = 0; index <= middleLineIndex; index++) {
    result.push(makeRow(dimension, index));
  }

  return result;
};

export const createDiamond = (dimension: number): string[][] => {
  const topHalfDiamond = createTopHalfDiamond(dimension);
  const bottomHalfDiamond = [...topHalfDiamond].reverse().slice(1);
  return [...topHalfDiamond, ...bottomHalfDiamond];
};

const printDiamond = (dimension: number): void => {
  const diamond = createDiamond(dimension);
  const stringToDisplay = diamond.map((row) => row.join(" ")).join("\n");
  console.log(stringToDisplay);
};

printDiamond(7);
