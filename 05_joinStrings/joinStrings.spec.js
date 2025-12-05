const values = require("./joinStrings");

describe("step 2", () => {
  test("firstName is Mister", () => {
    expect(values.firstName).toEqual("Mister");
  });
  test("lastName is Math", () => {
    expect(values.lastName).toEqual("Math");
  });
  test("thisYear is 2025", () => {
    expect(values.thisYear).toEqual(2025);
  });
  test("birthYear is 1981", () => {
    expect(values.birthYear).toEqual(1981);
  });
  test("greeting is properly output", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is Mister Math and I am 44 years old."
    );
  });
});

describe("step 3", () => {
  test("fullName is Mister Math", () => {
    expect(values.fullName).toEqual("Mister Math");
  });
  test("age is 44", () => {
    expect(values.age).toEqual(44);
  });
});
