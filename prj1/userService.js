function getUserRole(user) {
  if (!user) return 'guest';
  if (user.isAdmin) return 'admin';
  return 'user';
}

module.exports = { getUserRole };
