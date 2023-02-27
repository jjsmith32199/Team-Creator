const Intern = require("../lib/Intern");

test("Accept school constructor", () => {
    const schoolTest = 'SchoolName';
    const e = new Intern("Bob", 50, "email@email.com", schoolTest);
    expect(e.school).toBe(schoolTest);
});

test("getRole returns \"Intern\"", () => {
    const testRole = "Intern";
    const e = new Intern("Bob", 50, "email@email.com", "SchoolName");
    expect(e.getRole()).toBe(testRole);
});

test("Retrieve school from getSchool()", () => {
    const schoolTest = "SchoolName";
    const e = new Intern("Bob", 50, "email@email.com", schoolTest);
    expect(e.getSchool()).toBe(schoolTest);

});