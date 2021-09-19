const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` ✅  Assertation Passed ${actual} === ${expected}`);
  } else {
    console.log(` 🛑 Assertation Failed ${actual} !== ${expected}`);
  }
};

// 1. The oject match when:
// -- number of keys are the same
// -- values are the same

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

const ab = { a: "1", c: "4" };
const ba = { b: "1", a: "1" };
console.log(eqObjects(ab, ba)); // => true
