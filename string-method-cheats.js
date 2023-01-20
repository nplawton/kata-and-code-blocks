// charAt();
const txt = "Hello World";
console.log(txt.charAt(0));
// prints 'H'

// concat();
const str1 = "Hello ";                                          // These are just a collection of string methods I like to keep handy
const str2 = "Code Buddy";                                      // I used 'strX' throughout so each code block would run
console.log(str1.concat(str2));                                 // What's your favorite one?
// prints 'Hello Code Buddy'                                    // Try them yourself by running this file with Node

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
const str99 = "JavaScript";
console.log(str99.substr(4, 6));
// prints Script

// toUpperCase()
const phrase = "CodingHero";
console.log(phrase.toUpperCase());
// prints CODINGHERO

// valueOf()
const str6 = new String('test');
console.log(typeof str6); // 'object'
console.log(str6.valueOf()); // 'test'
console.log(typeof str6.valueOf()); // 'string'

// trim()
const str7 = "      Trim both sides      ";
console.log(str7.trim());
// prints Trim both sides (without the spaces at front and rear)

// toString()
const myNum = 155;
console.log(myNum.toString());
// prints 155 as a string instead of a number

// includes()
const str8 = "My name is Kev the Dev";
console.log(str8.includes("name"));
// prints true

// charCodeAt()
const str9 = "TEST";
console.log(str9.charCodeAt(0));
// prints 84

// match()
// *Note: this example uses the REGEX of 'g' to represent global
// this will search the entire string rather than just finding the first occurence
const str10 = "lopersum lopersum lopersum lopersum";
console.log(str10.match(/sum/g));
// prints [ 'sum', 'sum', 'sum', 'sum' ] as an array

// split()
const str11 = "1, 2, 3, 4, 5";
console.log(str11.split(","));
// prints [ '1', ' 2', ' 3', ' 4', ' 5' ]

// splice() *This is one of several different ways to use splice(), read the documentation
var lunchItems = ['Turkey Sandwich', 'Falafel', 'Paella', 'Processor Speed', 'RAM', 'Gyro'];
var indexOfFirstItemToBeRemoved = 3;
var numberOfItemsToRemove = 2;
var itemToBeAdded1 = 'Fish Tacos';
var itemToBeAdded2 = 'Pizza';

lunchItems.splice(indexOfFirstItemToBeRemoved, numberOfItemsToRemove, itemToBeAdded1, itemToBeAdded2);
console.log('list of lunch items after splicing:', lunchItems);
// Logs [ 'Turkey Sandwich', 'Falafel', 'Paella', 'Fish Tacos', 'Pizza', 'Gyro' ]

// String.prototype.repeat()
// Syntax repeat(count)
/* The repeat method constructs and returns a new string which contains
the specified number of copies of the string on which it was called, concatenated together
*/
function repeatString(string, num) {
    // your code here
    return string.repeat(num);
};

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'