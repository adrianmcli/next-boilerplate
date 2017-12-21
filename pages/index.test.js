const sum = (a, b) => a + b;

describe(`sum function`, () => {
  it(`should add 2 numbers`, () => {
    expect(sum(1, 2)).toBe(3);
  });
});
