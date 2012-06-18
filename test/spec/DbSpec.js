describe("DB", function() {

  beforeEach(function () {
    initDatabase("TEST_DB", true);
  });

  it("should be created", function() {
    expect(DB).not.toBe(undefined);
  });
});
