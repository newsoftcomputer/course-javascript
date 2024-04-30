/*
VAR

    - En javascript el ambito es de funcion (Osea si no esta en la funcion quedaria de ambito global asi este dentro de llaves de if, for etc )

    - Antes no existia ambito de bloque
    
    - Cuando se declara una variable con var el ambito no es privado
        sale a la raiz de la funcion o la raiz del programa (Al ambito global)

    - Se producida una elavacion o 

    - Var crea una variable cuyo ambito es el de la funcion
*/

// Declarar variable
// Esta varaible queda de ambito global (Se puede ver en el objeto window)
var a = 5

// Ejemplo de como la la variable sale deeste ambito de bloque 
if (true) {
    var edad = 8
}

console.log(edad)


// Ambito de funcion (No sale)
function x() {
    y = 1; // Lanza un error de tipo "ReferenceError" en modo estricto ('use strict')
    var z = 2;
}
  
x();
  
console.log(y); // Imprime "1"
console.log(z); // Lanza un error de tipo "ReferenceError": z no está definida afuera de x


console.log(b)

