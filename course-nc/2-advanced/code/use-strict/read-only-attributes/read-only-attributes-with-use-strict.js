
// Read Only Attributes with use strict

// Object with value name1 not writable

'use strict'

const user = {}
Object.defineProperty(user, 'name1', {value: 'Andres', writable: false} )

// If I try to change the value name1 from readonly if it catches the error
user.name1 = 'Mima'
console.log(user.name1)