jest.mock("./api", () => ({
  getUser: jest.fn(() => ({ name: "Mock User" })),
}));

const { getUser } = require("./api");
const { getUserName } = require("./service");

test("get user name with mock", () => {
  expect(getUserName()).toBe("Mock User");
});
