const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should return [1,2,3] for [1,2,3]", () => {
    const inputArray1 = [1, 2, 3];
    const inputArray2 = [1, 2, 3];
    assert.deepEqual(eqArrays(inputArray1, inputArray2), true);
  });
  it("should return false when [1, 2, 3] for [3, 2, 1]", () => {
    const inputArray1 = [1, 2, 3];
    const inputArray2 = [3, 2, 1];
    assert.notDeepEqual(eqArrays(inputArray1, inputArray1), false);
  });
  it("should return true when the arrays are string", () => {
    const inputArray1 = ["1", "2", "3"];
    const inputArray2 = ["1", "2", "3"];
    assert.deepEqual(eqArrays(inputArray1, inputArray2), true);
  });

  it("should return false when the array has numbers and strings", () => {
    const inputArray1 = ["1", "2", "3"];
    const inputArray2 = ["1", "2", 3];
    assert.notDeepEqual(eqArrays(inputArray1, inputArray1), false);
  });
});
