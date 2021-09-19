// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertation Passed ${actual} === ${expected}`);
  } else {
    console.log(`Assertation Failed ${actual} !== ${expected}`);
  }
};

// 1. Function => object and value
// 2. Scan the object => return the first key which contains the given value
// -- loop the object

//3. If no  key with the value is found => return undefined
// -- if statement inside the loop

const findKeyByValue = function (obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

const cliente = {
  nome: "Lucas",
  idade: 31,
  RG: 121321,
};

console.log(findKeyByValue(cliente, 31));

assertEqual(findKeyByValue(cliente, 31), "idade");
