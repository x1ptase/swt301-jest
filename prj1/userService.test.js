const { getUserRole } = require('./userService');

describe('User Service Demo Tests', () => {

  // PASS
  test('PASS: return admin role when user is admin', () => {
    const user = { name: 'Alice', isAdmin: true };
    expect(getUserRole(user)).toBe('admin');
  });

  // FAIL
  test('FAIL: expect admin role for normal user', () => {
    const user = { name: 'Billow', isAdmin: false };
    expect(getUserRole(!user)).toBe('user'); 
  });
  

});
