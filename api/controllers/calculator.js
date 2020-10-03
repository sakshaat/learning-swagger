"use strict";

var util = require("util");

module.exports = {
  add: add,
  subtract: subtract,
};

function add(req, res) {
  let x = parseInt(req.query.x);
  let y = parseInt(req.query.y);

  // this sends back a JSON response which is a single string
  res.json(`The result is ${x + y}`);
}

function subtract(req, res) {
  let x = parseInt(req.query.x);
  let y = parseInt(req.query.y);

  // this sends back a JSON response which is a single string
  res.json(`The result is ${x - y}`);
}
