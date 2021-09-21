const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const letterPositions = require("./letterPositions");
const map = require("./map");
const findKey = require("./findKey");
//const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const assertArraysEqual = require("./assertArraysEqual");
const findKeyByValue = require("./findKeyByValue");
const takeUntil = require("./takeUntil");
const without = require("./without");
const countOnly = require("./countOnly");

module.exports = {
  head,
  tail,
  middle,
  letterPositions,
  map,
  findKey,
  //eqObjects: eqObjects,
  eqArrays,
  assertObjectsEqual,
  assertArraysEqual,
  findKeyByValue,
  takeUntil,
  without,
  countOnly,
};
