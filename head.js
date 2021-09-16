const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertation Passed ${actual} === ${expected}`);
  } else {
    console.log(`Assertation Failed ${actual} !== ${expected}`);
  }
};

const head = function (myArray) {
  return myArray[0];
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");