const Manager = require("../lib/Manager");

test("Accepts office number constructor", () => {
    const officeTest = 12;
    const e = new Manager("Bob", 50, "email@email.com", 12);
    expect(e.office).toBe(officeTest);
});

test("getRole returns \"Manager\"", () => {
    const testRole = "Manager";
    const e = new Manager("Bob", 50, "email@email.com", 12);
    expect(e.getRole()).toBe(testRole);
});

test("Retrieve office number from getOfficeNum()", () => {
    const officeTest = 12;
    const e = new Manager("Bob", 50, "email@email.com", officeTest);
    expect(e.getOfficeNum()).toBe(officeTest);
});