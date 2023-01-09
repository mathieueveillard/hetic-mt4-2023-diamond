import { createDiamond, makeRow } from ".";

describe("Test of createRow", () => {
  test("Middle line (n = 1)", () => {
    // GIVEN
    const dimension = 1;
    const index = 0;

    // WHEN
    const actual = makeRow(dimension, index);

    // THEN
    const expected: string[] = ["*"];
    expect(actual).toEqual(expected);
  });

  test("Middle line (n = 3)", () => {
    // GIVEN
    const dimension = 3;
    const index = 1;

    // WHEN
    const actual = makeRow(dimension, index);

    // THEN
    const expected: string[] = ["*", "*", "*"];
    expect(actual).toEqual(expected);
  });

  test("Line above the middle line (n = 3)", () => {
    // GIVEN
    const dimension = 3;
    const index = 0;

    // WHEN
    const actual = makeRow(dimension, index);

    // THEN
    const expected: string[] = [" ", "*", " "];
    expect(actual).toEqual(expected);
  });

  test("Line above the middle line (n = 5)", () => {
    // GIVEN
    const dimension = 5;
    const index = 1;

    // WHEN
    const actual = makeRow(dimension, index);

    // THEN
    const expected: string[] = [" ", "*", "*", "*", " "];
    expect(actual).toEqual(expected);
  });

  test("Any line (n = 5)", () => {
    // GIVEN
    const dimension = 5;
    const index = 0;

    // WHEN
    const actual = makeRow(dimension, index);

    // THEN
    const expected: string[] = [" ", " ", "*", " ", " "];
    expect(actual).toEqual(expected);
  });

  test("Any line (n = 7)", () => {
    // GIVEN
    const dimension = 7;
    const index = 1;

    // WHEN
    const actual = makeRow(dimension, index);

    // THEN
    const expected: string[] = [" ", " ", "*", "*", "*", " ", " "];
    expect(actual).toEqual(expected);
  });
});

describe("Test of createDiamond", () => {
  test("n = 1", () => {
    // GIVEN
    const dimension = 1;

    // WHEN
    const actual = createDiamond(dimension);

    // THEN
    const expected: string[][] = [["*"]];
    expect(actual).toEqual(expected);
  });

  test("n = 3", () => {
    // GIVEN
    const dimension = 3;

    // WHEN
    const actual = createDiamond(dimension);

    // THEN
    const expected: string[][] = [
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ];
    expect(actual).toEqual(expected);
  });
});
