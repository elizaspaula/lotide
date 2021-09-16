// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// Use assertEqual to write test cases for various scenarios.

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day

//  1. loop the arrays
//  2. compare > if statement ?

// let arr1 = ["1", "2", "3"];
// let arr2 = ["1", "2", "3"];

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertation Passed ${actual} === ${expected}`);
  } else {
    console.log(`Assertation Failed ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
