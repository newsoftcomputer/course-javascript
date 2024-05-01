
// Non Extensible Objects With Use Strict

'use strict'

// Object with a preventExtension (Can't add more property)
const user = {name1: 'Andres'}
Object.preventExtensions(user)

// If you encounter an error while trying to add another property
user.age = 43
console.log(user)