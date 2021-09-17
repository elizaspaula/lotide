const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (item of array) {
    results.push(callback(item));
  }
  return results;
};

const result1 = map(words, (word) => word[0]);
console.log(result1);

// item BEFORE: ground
// item AFTER: g
// ---
// item BEFORE: control
// item AFTER: c
// ---
// item BEFORE: to
// item AFTER: t
// ---
// item BEFORE: major
// item AFTER: m
// ---
// item BEFORE: tom
// item AFTER: t
// ---
// [ ]
