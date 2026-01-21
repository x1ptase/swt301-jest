const math = require("../prj2/isPrime");
const math1 = require("../prj2/add");
test("SPY: isPrime is called correctly", () => {
  //1. tao 1 spy tren real function
  const spy = jest.spyOn(math, "isPrime");
  //2. goi real func
  const result = math.isPrime(14);
  //3. ktr hanh vi
  expect(spy).toHaveBeenCalled(); // có được gọi không
  expect(spy).toHaveBeenCalledWith(13); // tham số
  expect(result).toBe(true);

  // 4. Khôi phục lại function gốc
  spy.mockRestore();
});
