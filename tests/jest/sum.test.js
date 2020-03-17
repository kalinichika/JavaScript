const sum = require("./sum");

test("assignment to object", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("sum ", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(4);
});

test("sum not equal 0", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(sum(a, b)).not.toBe(0);
    }
  }
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("0", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("sum 0.1 + 0.2", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3); - не сработает из-за проблем округления
  expect(value).toBeCloseTo(0.3);
});

test("regular", () => {
  expect("Виктория").not.toMatch(/Я/);
  expect("Я Вкитория").toMatch(/Я/);
});

test("contain in array", () => {
  shoppingList = ["milk", "eggs", "bread"];
  expect(shoppingList).toContain("milk");
  expect(shoppingList).not.toContain("beer");
});

function compileCode() {
  throw new Error("you use a wrong JDK");
}
function compile2Code() {
  return 1;
}

test("throw", () => {
  expect(compile2Code).not.toThrow(Error);

  expect(compileCode).toThrow();
  expect(compileCode).toThrow(Error);
  expect(compileCode).toThrow("you use a wrong JDK");
  expect(compileCode).toThrow(/JDK/);
});

const happyEmployees = [100, 30, 500, 750, 350, 600, 750];

expect(happyEmployees).toMatchSnapshot();
