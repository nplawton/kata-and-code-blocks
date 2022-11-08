// Accessing Object properties using dot notation
const apple = {
    color: 'Green',
    price: {
        bulk: '$3/kg',
        smallQty: '$4/kg'
    }
};
console.log(apple.color); // 'Green'
console.log(apple.price.bulk); // '$3/kg'

// Accessing non-existent properties
const classElection = {
    date: 'January 12'
};

console.log(classElection.place); // undefined

// Example showing Objects are mutable, even when declared as 'const'
const student = {
    name: 'Sheldon',
    score: 100,
    grade: 'A',
};

console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }

delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' }

student = {}
// TypeError: Assignment to constant variable.

// Example for...in loop
let mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9'
};

for (let key in mobile) {
    console.log(`${key}: ${mobile[key]}`);
};

// Delete operator
const person = {
    firstName: "Matilda",
    age: 27,
    hobby: "knitting",
    goal: "learning JavaScript"
};

delete person.hobby; // or delete person[hobby];

console.log(person);
/*
{
firstName: "Matilda"
age: 27
goal: "learning JavaScript"
}
*/