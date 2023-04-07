
// Found a number with filter (No use)
const numbers = [ 4, 2, 3, 5, 8, 9, 15, 657]
const findNumberFilter = numbers.filter(n => n === 15) [0]

console.log(findNumberFilter)


// Correct way
const findNumber = numbers.find(n => n === 15)
console.log(findNumber)