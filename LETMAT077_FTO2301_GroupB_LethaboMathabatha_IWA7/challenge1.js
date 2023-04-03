// The following code is meant to add the following three values together and log 10.
// However, it currently logs 343 instead. Please correct the mistake, and 
// explain why 343 was logged initially:

const value = 3
console.log(value + 4 + value)

// in the initial code, 343 was logged because 3 was a string value, and treated as such. 
// The result of this was concactenation, instead of mathematical evaluation
// removing the " " turned the 3 into a number

// alternative solution
const value1 = 3
console.log(parseInt(value1) + 4 + parseInt(value1))
