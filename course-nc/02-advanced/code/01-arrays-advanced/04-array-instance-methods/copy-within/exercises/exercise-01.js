

const moveArray = (array, target, start, end,) => {

    return array.copyWithin(target, start, end)

}

const array01 = ['Marco', 'Mariana', 'Daniela', 'Alejandra', 'Andres']

console.log('Original Array: ', array01)
console.log('Moved Array: ', moveArray(array01, 0, 1, 2))

