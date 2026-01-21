function getProfile(user) {
  return {
    name: user.name,
    role: user.role,
    active: true,
  };
}

module.exports = { getProfile };
