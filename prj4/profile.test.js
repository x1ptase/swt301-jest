const { getProfile } = require("./profile");
test("SNAPSHOT: profile object", () => {
  const user = { name: "Thuận", role: "student" };

  expect(getProfile(user)).toMatchSnapshot();
});
