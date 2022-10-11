// charAt();
const txt = "Hello World";
console.log(txt.charAt(0));
// prints 'H'

// concat();
const str1 = "Hello ";                                          // These are just a collection of string methods I like to keep handy
const str2 = "Code Buddy";                                      // Try them yourself by running this file in Node
console.log(str1.concat(str2));
// prints 'Hello Code Buddy'

// indexOf();
const text = "Let's find where 'pen' occurs!";
console.log(text.indexOf("pen"))
// prints 18

// lastIndexOf()
const stri1 = "A dev knows a dev";
const pos = stri1.lastIndexOf("dev");
console.log(pos);
// prints 14

// replace()
const str3 = "Hello dev";
console.log(str3.replace("dev", "World"));
// prints Hello World

// search()
const str4 = "Hello dev";
console.log(str4.search("dev"));
// prints 6

// slice()
const str5 = "Developer's World";
console.log(str5.slice(0, 11));
// prints Developer's

// substr(start, length)
const s = "JavaScript";
console.log(s.substr(4, 6));
// prints Script

