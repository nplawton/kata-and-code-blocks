// create a function that will take in a string as an argument and output a reversed string

function reverseStr (str) {
    // create variable to store reversed string
    var revStr = '';
    // loop through the string and go through each character in the string backwards, starting with the last character
    for (var i = str.length - 1; i >= 0; i--) {
        // within the loop, concatenate each letter in string to variable declared earlier
        revStr += str[i];
    }
    // log reversed string
    console.log(revStr);
}

reverseStr("I want to be reversed");



////////////////////////////////////////////////////////////////////////////////////////////
// ANOTHER COOL WAY TO DO IT!!!

const reverse = (input) => {
    return input.split("").reverse().join("");
}

console.log(reverse("Kevin Foreman"))
console.log(reverse("Coding is awesome!"))