
/*
LET

- El ambito es de bloque
*/

let a = 'Hello'

// Ejemplo de como la la variable NO sale deeste ambito de bloque 
if (true) {
    var edad = 8
}

console.log(edad)



function myFun() {
    return console.log(a)
}

myFun()