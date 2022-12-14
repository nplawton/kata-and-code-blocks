// All combinations using For Loops
// Use this to get all the combinations of choices from two or more arrays
// Could be useful when determining choices between weapons classes and types in games
// Try it in the console with 'node for-loop-combinations.js'
// Try changing the choices, or adding more arrays!

function generateCombinations(array1, array2) {
    // create a loop which iterates over the first array
    // create an inner loop which iterates over the second array
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            console.log(array1[i] + " " + array2[j]);
        }
    }
    // log current element of first array and current element of second array to the console with space in between
}

generateCombinations(["a", "b", "c"], ["d", "e", "f"]);
// console output:
// a d
// a e
// a f
// b d
// b e
// b f
// c d
// c e
// c f

generateCombinations([1, 2], ["buckle", "my", "shoe"]);
// console output:
// 1 buckle
// 1 my
// 1 shoe
// 2 buckle
// 2 my
// 2 shoe

// This flavors example is excellent
var flavors = ['Vanilla', 'Chocolate', 'Strawberry'];
var toppings = ['Sprinkles', 'Caramel', 'Whipped Cream'];

for (var i = 0; i < flavors.length; i++) {
    for (var j = 0; j < toppings.length; j++) {
        console.log("You can have " + flavors[i] + " with " + toppings[j]);
    }
}
