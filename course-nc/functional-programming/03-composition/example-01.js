
// COMPOSITION

// Text
const text = 'Learn to programing web application'

// Function to separate words
const splitSpace = function(str) {
    return str.split(' ')
}

const testSplit = splitSpace(text)
console.log(testSplit)


// Function to count arrays
const count = function(arr) {
    return arr.length
}

const testCount = count(testSplit)
console.log(testCount)


// Composition from fn splitSpace nad fn count
const countWords = function(str){
    return count(splitSpace(str))
}

const result = countWords(text)
console.log(result)