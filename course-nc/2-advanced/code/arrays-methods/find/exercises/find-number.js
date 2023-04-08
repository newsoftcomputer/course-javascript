
const numbers = [ 4, 2, 3, 5, 8, 9, 15, 657]

// Correct way to find a number (Do not use filter)
const findNumber = numbers.find(n => n === 15)
console.log(findNumber)