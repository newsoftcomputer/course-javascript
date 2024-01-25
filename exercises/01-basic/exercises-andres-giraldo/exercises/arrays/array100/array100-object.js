
let array = [];

for (let i = 1; i <= 100; i++) {
    array[i] = {
        id: i,
        name: Math.random().toString()
    }
}

console.log(array)