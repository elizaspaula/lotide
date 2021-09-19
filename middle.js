//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// For arrays with one or two elements, there is no middle. Return an empty array

//For arrays with odd number of elements, an array containing a single middle element should be returned

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

const middle = function (array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[array.length / 2] - 1, array[array.length / 2]];
  } else {
    return [array[Math.floor([array.length / 2])]];
  }
};

console.log(middle([1, 2, 3, 4])); // expect result should be 2,3
console.log(middle([1, 2])); //  expect result should array = []
console.log(middle([1, 3, 4])); // a single element should returned
