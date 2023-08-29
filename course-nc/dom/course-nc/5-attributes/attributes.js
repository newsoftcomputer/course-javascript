
// Attributes y Get Attributes
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute('lang'))

// Obtener el valor del elemento con la clase link-dom en el atributo href
// 2 formas
console.log(document.querySelector('.link-dom').href)   // Muestra la ruta completa
console.log(document.querySelector('.link-dom').getAttribute('href'))   // Muestra solo el valor en href

// Attributes HTML-DocumentElement
document.documentElement.lang = 'en'
console.log(document.documentElement.lang)

// Set Attribute
document.documentElement.setAttribute('lang', 'es-MX')
console.log(document.documentElement.lang)

// Assignado en const
const $linkDOM = document.querySelector('.link-dom')
$linkDOM.setAttribute('target', '_blank')
$linkDOM.setAttribute('href', 'https://nc-web-sites.nc-web.com.co/#section-header')
$linkDOM.setAttribute('rel', 'noopener')

// Remove Attribute
console.log($linkDOM.hasAttribute('rel'))   // Tiene el atributo, Para hacer consultas
$linkDOM.removeAttribute('rel')
$linkDOM.removeAttribute('rel')
