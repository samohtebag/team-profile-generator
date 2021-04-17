const Engineer = require("../lib/engineer");

test("Github User", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Bill", 33, "test@bigcorp.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Bill", 33, "test@bigcorp.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Bill", 33, "test@bigcorp.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});