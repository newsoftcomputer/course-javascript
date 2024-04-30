
// ================ OPERADORES RELACIONALES ======================

// Mayor que            /      > 
// Menor que            /      <  
// Mayor igual          /      >=
// Menor igual          /      <=
// Igual igual          /      ==
// Triple igual         /      ===
// Diferente de         /      !=
// Super diferente de   /      !==

// Asignacion / =
let a = 5;

// Comparacion de valores / ==  ( Mala practica porque podemos caer en errores)
console.log("7" == 7)   // Arroja verdadero asi sean de diferente tipo

// Comparacion de tipo de dato y valor / ===    ( Buena practica porque evalua si son del mismo valor y tipo )
console.log("7" === 7)  // Arroja falso por que no son el mismo tipo de dato (String y Number)

// Malas practicas - comparacion 2 y 3  los arroja como verdadero y no deberia de ser asi. 
console.log(7 == 7)
console.log("7" == 7)
console.log(0 == false)

// Buenas practicas - Solo arroja verdadero el 1 
console.log(7 == 7)
console.log("7" == 7)
console.log(0 == false)


// Incremento
let num = 4
// num = num + 5
let i = 5
let x = 5
let y = 1

 console.log('Incremento1:', num)
 // Incremento forma 1 ( Antigua ) 
 num = i + 2

// Incremento forma 2 ( Moderna )
x += 2
num += 5
console.log('Incremento2:', num)

// Otros
y -= 2
y *= 2
y /= 2


// Operador unario 
let w = 5
i++
i--

// Hay que tener cuidado con ++i o --i Porque puede sumar o restar antes y dar valores diferente en ciertas ocacciones
++i     // No recomendado
--i     // No recomendado

console.log(w)



