const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Office number", () => {
  const testValue = 1234;
  const e = new Manager("Gabe", 33, "gabe@whocares.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Gabe", 33, "gabe@whocares.com", 1234);
  expect(e.getRole()).toBe(testValue);
});

test("getOffice()", () => {
  const testValue = 1234;
  const e = new Manager("Gabe", 33, "gabe@whocares.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});