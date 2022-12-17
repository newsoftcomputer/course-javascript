
// Read Only Attributes without use strict

// Object with value name1 not writable
const user = {}
Object.defineProperty(user, 'name1', {value: 'Andres', writable: false} )

// If I try to change the value name1 from readonly it doesn't catch the error
user.name1 = 'Mima'
console.log(user.name1)
