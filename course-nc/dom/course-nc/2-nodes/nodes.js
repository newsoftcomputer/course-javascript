
// Metodo Nuevo para remplazar By Tag Name, Class Name, By Name
// Query Selector puede seleccionar ID, Name, Class HTML, Class CSS. (No Seudo Clases ni Seudo Elementos de CSS)
// Si seleccionan varios elementos el solo muetra el primero 
console.log(document.querySelector('#menu'))    // ID
console.log(document.querySelector('.card'))    // Class
console.log(document.querySelector('.card')(2)) // Class del Elemento 2 del array de elementos dentro del menu
console.log(document.querySelector('#menu li')) // Seleccione todos los li hijos del id menu

// Si muestra todos los elementos
console.log(document.querySelectorAll('a'))
console.log(document.querySelectorAll('a').length)
document.querySelectorAll('a').forEach(x => console.log(x))
console.log(document.querySelectorAll('.card'))    // Seleccionas todas las Clases Card
console.log(document.querySelectorAll('.card')(2)) // Todas las Elemento 2 del array de elementos dentro del menu
console.log(document.querySelectorAll('#menu li')) // Todos los li hijos del id menu

// Get Element By ID
// Tiene mas rendimiento que Query Selector
console.log(document.getElementById('menu'))


// Metodos en des uso - Use Query Selector
console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('card'))
console.log(document.getElementsByName('name'))
