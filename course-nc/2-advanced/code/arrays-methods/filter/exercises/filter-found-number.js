
// Foung a number with filter (No use)
const numbers = [ 4, 2, 3, 5, 8, 9, 15, 657]
const foundNumberFilter = numbers.filter(n => n === 15) [0]

console.log(foundNumberFilter)


// Correct way
const foundNumber = numbers.find(n => n === 15)
console.log(foundNumber)