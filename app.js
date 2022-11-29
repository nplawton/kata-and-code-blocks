function computeAverageOfNumbers(nums) {
    // your code here
    if (nums === undefined || Array.isArray(nums) === false || nums.length === 0) {
        return 0;
    }
    var totalNums = nums.reduce(function (accumulator,
        currentValue) {
        return accumulator + currentValue;

    }, 0);
    return totalNums / nums.length;

};

var input = [];
// var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3