
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute('lang'))

// Obtener el valor del elemento con la clase link-dom en el atributo href
// 2 formas
console.log(document.querySelector('.link-dom').href)   // Muestra la ruta completa
console.log(document.querySelector('.link-dom').getAttribute('href'))   // Muestra solo el valor en href