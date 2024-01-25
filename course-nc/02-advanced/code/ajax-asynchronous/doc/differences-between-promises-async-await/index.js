
/*
La llegada de Async Await
En ECMAscript 2017 es cuando Async Await entra al juego. Este nuevo feature de Javascript planteaba un mejor manejo de las promesas. 
Estos ya no estarían encadenados uno del otro volviendo la sintaxis más entendible y fácil de usar. Sobre todo fácil de usar. 
Para usarlo tan solo se necesita async functions y la keyword await. Este keyword permite que una promesa se resuelva y retorne su valor, 
esto permite que podamos guardarlo en variables. Pero no todo podía ser oro. await solo funciona en async functions. Este tipo de funciones 
simplemente se aseguran que lo que sea que retornen sea una promesa. Dicho de otro modo, estas funciones siempre retornan una promesa.

El manejo de async await es diferente a la de las promesas. Sabemos que await hace una pausa hasta que la promesa se resuelva. Literalmente, 
hace que la ejecución del async function espere hasta que la promesa se resuelva y retorne un valor,
aúnque esto no detiene el engine del lenguaje, este aún puede ejecutar otros scripts o eventos, esto significa que está volviendo 
el código asíncrono en síncrono.

Y tal vez habrás pensado en qué sentido tiene esto si ya no va a ser asíncrono o no sea de utilidad y que mejor sigues trabajando 
con las promesas. Pues, esto no es totalmente cierto. Async Await puede brillar en ciertos casos de uso donde necesitemos esperar 
y saber cuándo alguna función asíncrona se ejecute, por ejemplo en el caso de pedidos a una api, donde necesitemos que primero 
la página se llene de datos para que el usuario pueda interactuar.
*/
