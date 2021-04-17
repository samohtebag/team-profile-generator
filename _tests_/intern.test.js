const Intern = require("../lib/intern");

test("School name", () => {
  const testValue = "Generic U";
  const e = new Intern("Gabe", 33, "gabe@whocares.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Gabe", 33, "gabe@whocares.com", "Generic U");
  expect(e.getRole()).toBe(testValue);
});

test("getSchool()", () => {
  const testValue = "Generic U";
  const e = new Intern("Gabe", 33, "gabe@whocares.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});