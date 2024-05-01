
// Duplicate Parameters Without Use Strict

'use strict'

function greet(name, lastname, name) {
    console.log(`Hello ${name} ${lastname}`)
}

greet('Andres', 'Giraldo')