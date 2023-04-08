
// EXAMPLE OF HOW TO CREATE A POLYFILL
Array.prototype.toReversed = function() {
    return this.slice().reverse()
};


const numbers = [1, 2, 3]
console.log(numbers)

const numbersToReversed = numbers.toReversed()
console.log(numbersToReversed)