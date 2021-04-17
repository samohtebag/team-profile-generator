const Employee = require("../lib/employee");

test("Build up Employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Here is my name", () => {
    const name = "Gabe";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("Here's the ID", () => {
    const testValue = 5678;
    const e = new Employee("Gabe", testValue);
    expect(e.id).toBe(testValue);
  });
  
test("here's the email", () => {
    const testValue = "test@bigcorp.com";
    const e = new Employee("Gabe", 33, testValue);
    expect(e.email).toBe(testValue);
  });
  
test("getName()", () => {
    const testValue = "Gabe";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
test("getId()", () => {
    const testValue = 5678;
    const e = new Employee("Gabe", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
test("getEmail()", () => {
    const testValue = "test@bigcorp.copm";
    const e = new Employee("Gabe", 33, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
test("getRole() returns \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Gabe", 33, "test@bigcorp.com");
    expect(e.getRole()).toBe(testValue);
  });