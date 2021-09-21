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
  head: head,
  tail: tail,
  middle: middle,
  letterPositions: letterPositions,
  map: map,
  findKey: findKey,
  //eqObjects: eqObjects,
  eqArrays: eqArrays,
  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual,
  findKeyByValue: findKeyByValue,
  takeUntil: takeUntil,
  without: without,
  countOnly: countOnly,
};
