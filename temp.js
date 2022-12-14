function createNewArray(arr, func) {
    //Your pseudocode here
// Create an empty array to store the one we will create during this process
// Iterate over the given array so we know what we're working with inside of it
// Call the input function on the array parameter and set that equal to our empty one created earlier
// return the new array after the function modifies it

    //Your code here


for (var i = 0; i < arr.length; i++) {
    func;
}
return arr;
};

var output = createNewArray([4, 5, 6, 7, 8], function result() {
    Array.prototype.slice(1)
    console.log(result);
}
);
console.log(output) // ==> [ 5, 6, 7, 8 ]