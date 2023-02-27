const Engineer = require("../lib/Engineer");

test("Accepts github constructor", () => {
    const testGit = "GithubName";
    const e = new Engineer("Bob", 50, "email@email.com", testGit);
    expect(e.github).toBe(testGit);
});

test("getRole returns \"Engineer\"", () => {
    const testRole = "Engineer";
    const e = new Engineer("Bob", 50, "email@email.com", "GithubName");
    expect(e.getRole()).toBe(testRole);
});

test("Retrieve Github username from getGithub()", () => {
    const testGit = "GitHubName";
    const e = new Engineer("Bob", 50, "email@email.com", testGit);
    expect(e.getGitHub()).toBe(testGit);
});