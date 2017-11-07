function compileAndroidCode() {
  throw "error";
}
describe("throw error", () => {
  test("function goes as expected", () => {
    expect(compileAndroidCode).toThrow();

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow("error");
  });
});
