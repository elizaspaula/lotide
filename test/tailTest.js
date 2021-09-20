const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return [2,3] for [1,2,3]", () => {
    const inputArray = [1, 2, 3];
    assert.deepEqual(tail(inputArray), [2, 3]);
  });

  it("should return [Lighthouse, Labs]  for [ Yo Yo, Lighthouse, Labs]", () => {
    const inputArray = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArray), ["Lighthouse", "Labs"]);
  });

  it("should return [5,6] for [4,5,6]", () => {
    const inputArray = [4, 5, 6];
    assert.deepEqual(tail(inputArray), [5, 6]);
  });
});
