// Implement without which will return a subset of a given array, removing unwanted elements.

// This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

// Here are a couple examples, but please don't limit your testing to just these scenarios:

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// Use assertArraysEqual to write test cases for various scenarios.

// The tests can be written below the definition of your function.

// It's okay for without to not function correctly when using nested arrays or arrays of objects. We will save this "deeper" problem for another day.

// Write a test case to make sure that the original array is not modified.

// Among your test cases, be sure to include an important test that is easy to overlook: The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
//  Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertation Passed ${actual} === ${expected}`);
//   } else {
//     console.log(`Assertation Failed ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const without = function (source, itemToRemove) {
  for (i = 0; i < source.length; i++) {
    for (j = 0; j < itemToRemove; j++) {
      if (source[i] === itemToRemove[j]) {
        source.splice(i, 1);
      }
    }
    return source;
  }
};

console.log(without([1, 2, 3], [1]));
