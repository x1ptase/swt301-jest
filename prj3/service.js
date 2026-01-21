const { getUser } = require("./api");

function getUserName() {
  const user = getUser();
  return user.name;
}
module.exports = { getUserName };
