
function fibonacci(limit) {
    const arr = [0, 1]

    for (let i = 2; i <= limit; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr
}

const fb = fibonacci(20)
console.table(fb)