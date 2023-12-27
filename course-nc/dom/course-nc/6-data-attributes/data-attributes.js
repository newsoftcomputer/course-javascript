
const $aAtt = document.querySelector('#a-att')

console.log('Get Attribute = ', $aAtt.getAttribute('href'))

console.log('DataSet:', $aAtt.dataset)
console.log('DataSet Description:', $aAtt.dataset.description)

// Add Data Attribute por Code
$aAtt.setAttribute('data-prueba02', 'Esta es la prueba 02')
console.log('Data Prueba 02:', $aAtt.dataset.prueba02)


// Remove Data Attribute por Code
$aAtt.removeAttribute('data-prueba02')
console.log('DataRemove Prueba 02:', $aAtt.dataset.prueba02)


// Has: Tiene attribute
console.log('Has Attribute prueba 01:', $aAtt.hasAttribute('data-prueba01'))
console.log('Has Attribute prueba 02:', $aAtt.hasAttribute('data-prueba02'))