
# REDUCE

    - The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

    The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).


## ============ ARRAY REDUCE =============

    - Reduce es un metodo que tienen los arreglos en JavaScript y permiten ejecutar 
    funciones reducer

    - Se llaman igual que en Redux (reducer). Pero no son lo mismo.

    - La funcion de reducer recibe 2 argumentos
    1. El primer argumento es un valor que esta siendo acumulado.
    2. El segundo es el elemento que se esta iterando del arreglo.

    - Al final la funcion devuelve el elemento que se esta acumulando

    jemplo codigo:

    - Funcion reducer
    const reducer = (acumulador, valorActual) => nuevoAcumulador

    - Funcion reducer | acc = acumulador | el = elemento | 0 = valor inicial
    const reducido = [].reduce((acc, el) => acc + el, 0)
