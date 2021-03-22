/*function wakeUp(isMorning, cb) {
    setTimeout(function () {
        if (isMorning) {
            console.log("Прокинувся");
            cb(null, true);
        } else {
            cb("Ще ніч, спи!")
        }
    }, /!*4000*!/0)
}

function makeCofee(isAwake, cb) {
    setTimeout(function () {
        if (isAwake) {
            console.log("Випив кави");
            cb(null, true);
        } else {
            console.log("Я ще сплю");
            cb("Я ще сплю");
        }
    }, /!*2000*!/0)
}

function putShugar(gotCoffe, cb) {
    setTimeout(function () {
        let countOfShugar = 4;
        if (gotCoffe) {
            console.log(`Поклав ${countOfShugar} ложки цукру`);
            cb(null, countOfShugar);
        } else {
            cb("Не маю цукру");
        }
    }, /!*1000*!/0)
}

function study(studyTime, cb) {
    setTimeout(function () {
        let studyTime = 140;
        if (studyTime) {
            cb(null, studyTime % 60);
        } else {
            cb("Шось ліньки сьогодні =(");
        }
    }, /!*5000*!/0)
}

function getEat(endStudy, cb) {
    setTimeout(function () {
        let i = 0;
        let meal;
        if (i === 0) {
            meal = "обід";
        } else {
            meal = "вечерю";
        }
        i++;
        if (endStudy) {
            cb(null, meal);
        } else {
            cb("Окей, буду голодним=(");
        }
    }, /!*2000*!/0)
}

function getWalk(eatDone, cb) {
    setTimeout(function () {
        let walkPlace = "парк";
        if (eatDone) {
            cb(null, walkPlace);
        } else {
            cb("Посиджу ліпше вдома, не піду нікуди");
        }
    }, /!*4000*!/0)
}

function watchFilm(eatDone, cb) {
    setTimeout(function () {
        let wachedFilm = "Робокоп";
        if (eatDone) {
            cb(null, wachedFilm);
        } else {
            cb("Я ще не поїв!");
        }
    }, /!*2000*!/0)
}

function goSleep(wachedFilm, cb) {
    setTimeout(function () {
        if (wachedFilm) {
            cb(null, true);
        } else {
            cb("Треба ще шось подивитись, шось не спиться");
        }
    }, /!*6000*!/0)
}

// let isMorning = true;
wakeUp(true,function (err, youAwake) {
    if (err) {
        console.log(err);
    } else {
        console.log("Йду робити каву");
        let isAwake = true;
        makeCofee(isAwake, function (err, hadCoffe) {
            if (err) {
                console.log(err);
            } else {
                console.log("Требо покласти цукру");
                putShugar(hadCoffe, function (err, gaveShugar) {
                    if (err) {
                        console.log(err + " ");
                    } else {
                        console.log("Треба йти вчитись");
                        study(gaveShugar, function (err, endStudy) {
                            if (err) {
                                console.log(err + " ");
                            } else {
                                console.log(`Я провчився цілих ${endStudy % 60} годин, треба поїсти`);

                                getEat(endStudy, function (err, eatDone) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log(`З'їв ${eatDone}, піду прогуляюсь`);
                                        getWalk(eatDone, function (err, walkPlace) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                console.log(`Прогулявся в ${walkPlace}`);
                                                let walkDone = true;
                                                study(walkDone, function (err, endStudy) {
                                                    if (err) {
                                                        console.log(err + " ");
                                                    } else {
                                                        console.log(`Я провчився цілих ${endStudy} годин, треба поїсти`);
                                                        getEat(endStudy, function (err, eatDone) {
                                                            if (err) {
                                                                console.log(err);
                                                            } else {
                                                                console.log(`З'їв ${eatDone} повтикаю відоси`);
                                                                watchFilm(eatDone, function (err, film) {
                                                                    if (err) {
                                                                        console.log(err);
                                                                    } else {
                                                                        let filmWatched = true;
                                                                        console.log(`Я подивився фільм ${film}, пора спати`);
                                                                        goSleep(filmWatched, function (err, ImSleep) {
                                                                            if (err) {
                                                                                console.log(err);
                                                                            } else {
                                                                                console.log("Я сплю, зустрінемося завтра!")
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                });
            }
        })
    }
})

function wakeUp2() {
    setTimeout(function () {
        console.log("Прокинувся");
    }, 2000)
}*/
    // Счетчик
/*function close() {
    let i = 0;

    return function () {
        i++;
        console.log(i);
    };
}
let counter = close();*/


    // Solution 2. Промисы


function wakeUp(alarmClockOn) {

    return new Promise( ((resolve, reject) => {
        setTimeout(function () {
            if (alarmClockOn) {
                resolve("Прокинувся");
            } else {
                reject("Ще ніч, спи!");
            }
        },  2000)
        })
    )
}
function makeCofee(isAwake) {
    console.log("----------------------------------------");
    console.log("Йду робити каву");
    return new Promise( ((resolve, reject) => {
        setTimeout(function () {
            if (isAwake) {
                resolve("Зробив запашної кави");
            } else {
                reject("Я ще сплю");
            }
        }, 2000)
        })
    )
}

function putShugar(countOfShugar) {
    console.log("----------------------------------------");
    console.log("Треба б ще сахарочку");
    return new Promise( ((resolve, reject) => {
        setTimeout(function () {
            if (countOfShugar <=2) {
                resolve(`Поклав ${countOfShugar} ложки цукру, п'ю каву`);
            } else {
                reject("Занадто солодкий, фу");
            }
        }, 1000)
        })
    )
}

function study(studyTime) {
    console.log("----------------------------------------");
    console.log("Треба повчитися, а то шо я як лінива жопа");
    return new Promise( ((resolve, reject) => {
        setTimeout(function () {
            if (studyTime) {
                resolve(`Я провчився ${(studyTime / 60).toFixed(2)} годин`);
            } else {
                reject("Шось ліньки сьогодні =(");
            }
        }, 5000)
        })
    )
}

function getEat(meal) {
    console.log("----------------------------------------");
    console.log("Шось поїм піду");
    return new Promise( ((resolve, reject) => {
        setTimeout(function () {
            if (meal) {
                resolve(`Смачно поїв ${meal}`);
            } else {
                reject("Окей, буду голодним=(");
            }
        } , 2000)
        })
    )
}

function getWalk(walkPlace) {
    console.log("----------------------------------------");
    console.log("Піду прогуляюсь");
    return new Promise( ((resolve, reject) => {
            setTimeout(function () {
                if (walkPlace) {
                    resolve(`Сходив погуляти в ${walkPlace}`);
                } else {
                    reject("Посиджу ліпше вдома, не піду нікуди");
                }
            }, 4000)
        })
    )
}

function watchFilm(film) {
    console.log("----------------------------------------");
    console.log("Повтикаю відос якийсь");
    return new Promise( ((resolve, reject) => {
            setTimeout(function () {
                if (film) {
                    resolve(`Подивився класний фільм ${film}`);
                } else {
                    reject("Щось я ще забув зробити!");
                }
            }, 2000)
        })
    )
}

function goSleep(wachedFilm) {
    console.log("----------------------------------------");
    console.log("Може б то спати пітти");
    return new Promise( ((resolve, reject) => {
            setTimeout(function () {
                if (wachedFilm) {
                    resolve("Пішов спати короче, надобраніч");
                } else {
                    reject("Треба ще шось подивитись, шось не спиться");
                }
            }, 6000)
        })
    )
}


let dzinDzin =  new Promise((resolve, reject) => {
        // console.log("Звєніт будільнік");
        resolve("Звєніт будільнік");

});

/*dzinDzin.then(isAlarmOn => wakeUp(isAlarmOn)).then(
    isAwake => {console.log(isAwake); return makeCofee(isAwake);}).then(
    madeCofee => {console.log(madeCofee); return putShugar(1)}).then(
    drinkCofee => {console.log(drinkCofee); return study(140)}).then(
    lerned => {console.log(lerned); return getEat("кашку");}).then(
    eaten => {console.log(eaten); return getWalk("парк")}).then(
    walked => {console.log(walked); return getEat("мясцо");}).then(
    eaten => {console.log(eaten); return study(80)}).then(
    lerned => {console.log(lerned); return watchFilm("Льод");}).then(
    wached => {console.log(wached); return goSleep(wached);}).then(
    slepping => console.log(slepping)).finally(() =>{ console.log("Я сплю, відчепись!!"); return null;})*/

async function daySchedule () {
    let isAwake = await dzinDzin;
    console.log(isAwake)
    let madeCofee = await makeCofee(isAwake);
    console.log(madeCofee)
    let drinked = await putShugar(3);
    console.log(drinked)
    let lerned = await study(150);
    console.log(lerned)
    let eaten = await getEat("кашку");
    console.log(eaten)
    let walked = await getWalk(/*"парк"*/false);
    console.log(walked)
    eaten = await getEat("мясцо");
    console.log(eaten)
    lerned = await study(80);
    console.log(lerned)
    let wached = await watchFilm("Льод");
    console.log(wached)
    let slepping = await goSleep(wached);
    console.log(slepping)
}
daySchedule();