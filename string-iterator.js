// String.prototype[@@iterator]()
// The @@iterator method implements the iterable protocol and allows strings to be consumed
// by most syntaxes expecting iterables, such as the spread syntax (...) and for...of loops.
// It returns an iterator which yields the Unicode code points of the string value as 
// individual strings

// Give it a try by running node app.js in your terminal (with Node installed)

const str = 'The quick red fox jumped over the lazy dog\'s back.';

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
};