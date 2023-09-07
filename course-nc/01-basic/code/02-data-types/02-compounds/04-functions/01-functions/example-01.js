
/*
Funciones

- En términos generales, una función es un "subprograma" que puede ser llamado por código externo 
(o interno en caso de recursión) a la función. Al igual que el programa en sí mismo, 
una función se compone de una secuencia de declaraciones, que conforman el llamado cuerpo de la función. 
Se pueden pasar valores a una función, y la función puede devolver un valor.

- Es un bloque de codigo

- En JavaScript, las funciones son objetos de primera clase, es decir, 
son objetos y se pueden manipular y transmitir al igual que cualquier 
otro objeto. Concretamente son objetos Function.

- Toda función en JavaScript es un objeto Function. Ver Function para obtener 
información sobre las propiedades y métodos de los objetos Function.
*/

// Declarar Funcion
function myFunction() {
    // Codigo
}

// Invocar funcion
myFunction()


// Funcion con parametros
function suma(num1, num2) {
    return num1 + num2
}

console.log(suma(29, 8))
