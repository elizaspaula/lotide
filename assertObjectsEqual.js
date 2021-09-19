// As a continuation of the previous exercise, it's time to create our assertObjectsEqual function which will help us easily test functions that return objects.

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1).sort(); // transforma o objeto em array e sort => ajusta em ordem alfabetica
  const keys2 = Object.keys(object2).sort();

  if (keys1.length !== keys2.length) {
    console.log("FALSE 1");
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      console.log(`Key values are not the same: ${keys1[i]}, ${keys2[i]}`);
      return false;
    }
    if (object1[keys1[i]] !== object2[keys2[i]]) {
      // > Checa o valor do array
      console.log(
        `Value are different: ${object1[keys1[i]]}, ${object2[keys2[i]]}`
      );
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "1", a: "2" };

assertObjectsEqual((ab, ba), true);
