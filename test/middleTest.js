const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    const inputArray = [1, 2, 3, 4];
    assert.deepEqual(middle(inputArray), [2, 3]);
  });

  it("should return [] for [1, 2]", () => {
    const inputArray = [1, 2];
    assert.deepEqual(middle(inputArray), []);
  });
  it("should return [2] for [1, 2, 4]", () => {
    const inputArray = [1, 2, 4];
    assert.deepEqual(middle(inputArray), [2]);
  });
});
