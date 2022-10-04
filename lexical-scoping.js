// This is a great example of scoping
// based on this simple code block we can see how scoping works with JavaScript
// Analyze the code and see if you can guess what this code logs
// To give it a try, invoke function two() it in your terminal with Node
// To do that (with Node installed on your machine) type 'node lexical-scoping.js'

const num = 6;

function one() {
    console.log('inside one and num is', num)
};

function two() {
    const num = 3;

    one()
};

two()