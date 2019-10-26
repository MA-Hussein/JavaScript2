'use strict';

// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x); // The output will be 9 because we consol log x, which declared as (const) with 9 value , so doesn't allow  to reassign the variable.

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); // The output will be {x: 10} , because 'y' is an object with 'x' key, so when 'f2' function called it takes the object as an argument and inside of 'f2' object key x is reassigned .