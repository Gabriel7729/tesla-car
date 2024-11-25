const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 0 + 5 to equal 5', () => {
  expect(sum(0, 5)).toBe(5);
});

test('adds -1 + -1 to equal -2', () => {
  expect(sum(-1, -1)).toBe(-2);
});

test('adds 10 + 15 to equal 25', () => {
  expect(sum(10, 15)).toBe(25);
});
