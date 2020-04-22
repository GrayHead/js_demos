function wakeUp(isMorning, cb) {
    setTimeout(function () {
        if (isMorning) {
            console.log("Прокинувся");
            cb(null, true);
        } else {
            cb("Я ще спл.")
        }
    }, 2000)
}

function drinkCofee(isWake) {
    setTimeout(function () {
        console.log("Випив кави");
    }, 2000)
}

function wakeUp() {
    setTimeout(function () {
        console.log("Прокинувся");
    }, 2000)
}

function wakeUp() {
    setTimeout(function () {
        console.log("Прокинувся");
    }, 2000)
}

function wakeUp() {
    setTimeout(function () {
        console.log("Прокинувся");
    }, 2000)
}

function wakeUp() {
    setTimeout(function () {
        console.log("Прокинувся");
    }, 2000)
}