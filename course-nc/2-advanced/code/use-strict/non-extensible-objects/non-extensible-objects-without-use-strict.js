
// Non Extensible Objects Without Use Strict

// Object with a preventExtension (Can't add more property)
const user = {name1: 'Andres'}
Object.preventExtensions(user)

// Does not catch error when trying to add another property
user.age = 43
console.log(user)
