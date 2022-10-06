// Javascript's find() method can be used to search an array to find a specific object

// Declare an array of objects
const employess = [
    {name: "Paul", job_title: "Software Engineer"},
    {name: "Peter", job_title: "Web Developer"},
    {name: "Harald", job_title: "Screen Designer"},
]

// Create a variable to execute the method
let sen = employess.find(data => data.job_title === "Software Engineer")

console.log(sen) // { name: 'Paul', job_title: 'Software Engineer' }