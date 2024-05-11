
# Array.prototype.entries()
    
    - Baseline Widely available
    El método entries() retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.
    Pruébalo


## Sintaxis
    
    arr.entries()
    Valor de retorno
    Un nuevo objeto iterador Array.


## Ejemplos
    
    - Usando un bucle for…of
    JS
    Copy to Clipboard
    var a = ["a", "b", "c"];
    var iterator = a.entries();

    for (let e of iterator) {
    console.log(e);
    }
    // [0, 'a']
    // [1, 'b']
    // [2, 'c']