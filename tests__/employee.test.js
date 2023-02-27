const Employee = require('../lib/Employee');

test('Create instance of employee', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('Accept name constuctor', () => {
    const name = 'Bob';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Accepts ID value constructor", () => {
    const idVal = 50;
    const e = new Employee("Bob", idVal);
    expect(e.id).toBe(idVal);
});

test("Accepts email value constructor", () => {
    const testEmail = 'liame@email.com';
    const e = new Employee("Bob", 50, testEmail);
    expect(e.email).toBe(testEmail);
});

test("Retrieve name from getName() function", () => {
    const testName = "Bob";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});

test("Retrieve id from getId() function", () => {
    const testId = 50;
    const e = new Employee("Bob", 50);
    expect(e.getId()).toBe(testId);
});

test("Retrieve email from getEmail() function", () => {
    const testEmail = "Bob";
    const e = new Employee(testEmail);
    expect(e.getName()).toBe(testEmail);
});

test("Function getRole() returns \'Employee\'", () =>{
    const testRole = "Employee";
    const e = new Employee("Bob", 50, "liame@email.com");
    expect(e.getRole()).toBe(testRole);
});