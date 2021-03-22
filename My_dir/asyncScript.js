let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("start");
    },2000)
})

promise.then(value => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1");
        },2000)
    })
}).then(value => {
    console.log(value);
    return "2"
}).then(value => {
    setTimeout(() => {
        return "3"
    },2000)
}).then(value => {
    console.log(value);
    return "4"
}).then(value => {
    console.log(value);
})