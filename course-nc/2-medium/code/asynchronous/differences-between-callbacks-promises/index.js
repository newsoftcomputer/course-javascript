
// CallBack
// Way to do asynchrony above
// A function was returned by parameter with setTimeout
const doAsyncStuffWithCallBack = (num1, num2, callback) => {
    const result = num1 + num2
    return setTimeout(() => {
        callback(result)
    }, 500)
}

doAsyncStuffWithCallBack(1, 2, (result) => {
    console.log(result)
})



// Promise
// 
doASyncStuffWithPromises = (num1, num2) => {
    const result =num1 + num2
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result), 500)
    })
}

doASyncStuffWithPromises(1, 2)
    .then((result) => console.log(result))

