
import test from 'node:test'
import assert from 'node:assert'

import 'core-js/proposals/change-array-by-copy.js'   // Require type modules actived 
// require('core-js/proposals/change-array-by-copy.js')

// Example 01

const numbers = [1, 2, 3]
console.log(numbers)

const numbersReversed = numbers.toReversed()
console.log(numbersReversed)