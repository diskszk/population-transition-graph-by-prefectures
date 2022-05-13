import "@testing-library/jest-dom/extend-expect";

function add(x: number, y: number): number {
  return x + y;
}

test("1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("4 + 5 != 6", () => {
  expect(add(5, 6)).toBe(7);
});
