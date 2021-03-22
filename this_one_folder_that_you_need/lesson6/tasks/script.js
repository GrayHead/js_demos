// - создать массив с 20 числами.
let numArr = [];
for (let i = 0; i < 10; i++) {
    numArr.push(Math.floor(Math.random() * 100));
}
document.write("Массив чисел : " + numArr + '<br>');

// -- при помощи метода sort отсортировать массив.
let sortedToUp = numArr.slice();
sortedToUp.sort((a,b) =>  a - b);
document.write("Отсортированый по возростанию : " + sortedToUp + '<br>');

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let sortedToDown = numArr.slice();
sortedToDown.sort((a,b) =>  a - b);
document.write("Отсортированый по убыванию : " + sortedToDown + '<br>');

// -- при помощи filter получить числа кратные 3
let kratne3 = numArr.filter((num) => num % 3 === 0);
document.write("Кратные 3 : " + kratne3 + '<br>');

// - при помощи filter получить числа кратные 10
let kratne10 = numArr.filter((num) => num % 10 === 0);
document.write("Кратные 10 : " + kratne10 + '<br>');

// -- перебрать (проитерировать) массив при помощи foreach()
numArr.forEach((num) => document.write(num + ", "));
document.write('<br>');

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let increase3Times = numArr.map((num) => num*3);
document.write("Увеличены в 3 раза : " + increase3Times + '<br>');

document.write("<br>");
// - создать массив со словами на 15-20 элементов.
let stringArr = ["малина","Ежевика","Клубника","Малина","бук","Дыня","вишня","сук","Черника","Арбуз","аб","персик","Яблоко","Бру"];
document.write(stringArr + '<br>');

// -- отсортировать его по алфавиту в восходящем порядке.
let sortedStringToUp = stringArr.slice();
sortedStringToUp.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    } else {
        return -1;
    }
});
document.write("Отсортированый вверх : " + sortedStringToUp + '<br>');

// -- отсортировать его по алфавиту  в нисходящем порядке.
let sortedStringToDown = stringArr.slice();
sortedStringToDown.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
    } else {
        return 1;
    }
});
document.write("Отсортированый вверх : " + sortedStringToDown + '<br>');

// -- отфильтровать слова длиной менее 4х символов
let filteredLength = stringArr.filter(str => str.length > 4);
document.write("Больше 4 чимволов : " + filteredLength + '<br>');

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let arrWithMark = stringArr.map(str => {
    let newStr = str + "!";
    return newStr;
});
document.write("! в конце : " + arrWithMark + '<br>' + '<br>');

document.write("---------  Массив Обьектов  -------------" + '<br>');
function writeObj(arrOfObj) {
    for (const obj of arrOfObj) {
        for (const key in obj) {
            document.write(`${key}:  ${obj[key]}, `);
        }
        document.write("<br>");
    }
    return "<br>";
}
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
let sortedByAge = JSON.parse(JSON.stringify(users));

sortedByAge.sort( (a, b) => b.age - a.age);

document.write("Сортировка по возрасту : " + '<br>');
document.write(writeObj(sortedByAge));

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let sortedByNameLength = JSON.parse(JSON.stringify(users));

sortedByNameLength.sort( (a, b) => {
    if (a.name.length > b.name.length) {
        return -1;
    } else {
        return 1;
    }
});

document.write("Сортировка по длинне имени : " + '<br>');
document.write(writeObj(sortedByNameLength));

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let newArrWithId = [];
users.forEach(user => {
    let newUser = JSON.parse(JSON.stringify(user));
    newUser.id = Math.floor(Math.random() * 30 + 1);
    newArrWithId.push(newUser);
})
document.write("Новый массив с ID : " + '<br>');
document.write(writeObj(newArrWithId));

// - відсортувати його за індентифікатором
newArrWithId.sort((a, b) => a.id - b.id);
document.write("Отсортированный массив с ID : " + '<br>');
document.write(writeObj(newArrWithId));

// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком
let firstVal = document.getElementById("field1");
let secondVal = document.getElementById("field3");
let action = document.getElementById("field2");
let result = document.getElementById("result");
let btn = document.getElementById("equalBtn");

/*btn.onclick = function (event) {
    if (firstVal.value && typeof secondVal.value && action.value) {
        switch (action.value) {
            case "+": getResult(null, +firstVal.value, +secondVal.value, add); break;
            case "-": getResult(null, +firstVal.value, +secondVal.value, subtract); break;
            case "*": getResult(null, +firstVal.value, +secondVal.value, multiply); break;
            case "/": getResult(null, +firstVal.value, +secondVal.value, divide); break;
            default: getResult("err");
        }
    }
};

function getResult(err, a, b, doAction) {
    if (err) {
        result.value = "Something wrong";
    } else {
        result.value = doAction(a, b);
    }
}*/

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

// -- наисать функцию калькулятора с 3мя числами и колбеком
// a "action1" b "action2" c = d
let a = 5;
let b = 5;
let c = 3;
let d;
let action1 = "-+";
let action2 = "*";

function getResult(a, action1, b, action2, c) {
    if ((action1 === "+" || action1 === "-") && (action2 === "*" || action2 === "/")) {
        [action1, action2] = [action2, action1];
        [a, b] = [b, a];
    }

    let ab = checkAction(a, action1, b);
    if (!isFinite(ab)) {
        return doAction("err");
    }
    let result = checkAction(ab,action2, c);
    return result;
}

function checkAction(a, action, b) {
    let res;
    switch (action) {
        case "+": res = doAction(null, a, b, add); break;
        case "-": res = doAction(null, a, b, subtract); break;
        case "*": res = doAction(null, a, b, multiply); break;
        case "/": res = doAction(null, a, b, divide); break;
        default: res = doAction("err");
    }
    return res;
}

function doAction(err, a, b, action) {
    if (err) {
        return "Something wrong";
    } else {
        return action(a, b);
    }
}

console.log(getResult(a, action1, b, action2, c));

// =============КЛАССНАЯ РАБОТА=================
let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 3,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// document.write("Увеличены в 3 раза : " + increase3Times + '<br>');
// - двигун більше 3х літрів
document.write("Обьем двигателя > 3 : <br>");
let bigVolume = cars.filter(car => car.volume > 3);
writeObj(bigVolume);

// двигун = 2л
document.write("Обьем двигателя = 3 : <br>");
let volumEqual2 = cars.filter(car => car.volume === 3);
writeObj(volumEqual2);
// - виробник мерс
document.write("Тупо одни мерсы : <br>");
let mers = cars.filter(car => car.producer === "mercedes");
writeObj(mers);
// - двигун більше 3х літрів + виробник мерседес
document.write("двигун більше 3х літрів + виробник мерседес : <br>");
let mersWithBigVolume = cars.filter(car => car.producer === "mercedes" && car.volume > 3);
writeObj(mersWithBigVolume);
// - двигун більше 3х літрів + виробник субару
document.write("двигун більше 3х літрів + виробник субару : <br>");
let subaruWithBigVolume = cars.filter(car => car.producer === "subaru" && car.volume > 3);
writeObj(subaruWithBigVolume);
// - сили більше ніж 300
document.write("сили більше ніж 300 : <br>");
let bigForce = cars.filter(car => car.power > 300);
writeObj(bigForce);
// - сили більше ніж 300 + виробник субару
document.write("сили більше ніж 300 + виробник субару : <br>");
let subaruBigForce = cars.filter(car => car.power > 300 && car.producer === "subaru");
writeObj(subaruBigForce);

document.write("<br>");
function deepWrite(arrOfObj) {
    for (const obj of arrOfObj) {
        for (const key in obj) {
            if (typeof obj[key] === "object") {
                document.write(`${key.toUpperCase()}: `);
                for (const key2 in obj[key]) {
                    document.write(`${key2}:  ${obj[key][key2]}, `);
                }
            } else {
                document.write(`${key}:  ${obj[key]}, `);
            }
        }
        document.write("<br>");
    }
    return "<br>";
}
// - взять слдующий массив
let usersWithAddress = [
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Pavlova', number: 115}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Glinki', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Vidkryta', number: 90}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Kulparkivska', number: 16}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Anisimova', number: 43}},
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Dachna', number: 16}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Saharova', number: 22}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Gorbachevskogo', number: 1}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Pekarska', number: 12}},
    ];

// -- отсортировать его по id пользователей
document.write("отсортировать его по id пользователей : <br>");
let sortedBytId = (JSON.parse(JSON.stringify(usersWithAddress)));
sortedBytId.sort((a, b) => a.id - b.id);
deepWrite(sortedBytId);
// -- отсортировать его по id пользователей в обратном опрядке
document.write("отсортировать его по id пользователей в обратном опрядке : <br>");
let sortedBytIdReverse = (JSON.parse(JSON.stringify(usersWithAddress)));
sortedBytIdReverse.sort((a, b) => b.id - a.id);
deepWrite(sortedBytIdReverse);
// -- отсортировать его по возрасту пользователей
document.write("отсортировать его по возрасту пользователей : <br>");
let sortedByAge2 = (JSON.parse(JSON.stringify(usersWithAddress)));
sortedByAge2.sort((a, b) => a.age - b.age);
deepWrite(sortedByAge2);
// -- отсортировать его по возрасту пользователей в обратном порядке
document.write("отсортировать его по возрасту пользователей в обратном порядке : <br>");
let sortedByAgeReverse = (JSON.parse(JSON.stringify(usersWithAddress)));
sortedByAgeReverse.sort((a, b) => b.age - a.age);
deepWrite(sortedByAgeReverse);
// -- отсортировать его по имени пользователей
document.write("отсортировать его по имени пользователей : <br>");
let sortedByName2 = (JSON.parse(JSON.stringify(usersWithAddress)));
sortedByName2.sort((a, b) => {
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
    } else {
        return -1;
    }
});
deepWrite(sortedByName2);
// -- отсортировать его по имени пользователей в обратном порядке
document.write("отсортировать его по имени пользователей в обратном порядке : <br>");
let sortedByName2Reverse = (JSON.parse(JSON.stringify(usersWithAddress)));
sortedByName2Reverse.sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return 1;
    } else {
        return -1;
    }
});
deepWrite(sortedByName2Reverse);
// -- отсортировать его по названию улицы  в алфавитном порядке
document.write("отсортировать его по названию улицы  в алфавитном порядке : <br>");
let sortedByStreet = (JSON.parse(JSON.stringify(usersWithAddress)));
sortedByStreet.sort((a, b) => {
    if (a.address.street.toUpperCase() > b.address.street.toUpperCase()) {
        return 1;
    } else {
        return -1;
    }
});
deepWrite(sortedByStreet);
// -- отсортировать его по номеру дома по возрастанию
document.write("отсортировать его по номеру дома по возрастанию : <br>");
let sortedByNumber = (JSON.parse(JSON.stringify(usersWithAddress)));
sortedByNumber.sort((a, b) => a.address.number - b.address.number);
deepWrite(sortedByNumber);

// -- отфильтровать (оставить) тех кто младше 30
document.write("отфильтровать (оставить) тех кто младше 30 : <br>");
let young = usersWithAddress.filter(user => user.age < 30);
deepWrite(young);
// -- отфильтровать (оставить) тех у кого отрицательный статус
document.write("отфильтровать (оставить) тех у кого отрицательный статус : <br>");
let usersWithoutStatus = usersWithAddress.filter(user => user.status === false);
deepWrite(usersWithoutStatus);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
document.write("отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет : <br>");
let youngUsersWithoutStatus = usersWithAddress.filter(user => user.status === false && user.age < 30);
deepWrite(youngUsersWithoutStatus);
// -- отфильтровать (оставить) тех у кого номер дома четный
document.write("отфильтровать (оставить) тех у кого отрицательный статус : <br>");
let usersWithEvenNumbers = usersWithAddress.filter(user => user.address.number % 2 === 0);
deepWrite(usersWithEvenNumbers);

// ======ДОПОЛНИТЕЛЬНО========

// let carPark = JSON.parse(JSON.stringify(cars));

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

Array.prototype.getMinMaxIndex = function (arr, num) {
    let minIndex, maxIndex;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            if (!minIndex) {
                minIndex = i;
            }
        }
        if (arr[i] > num) {
            if (!maxIndex) {
                maxIndex = i-1;
            }
        }
    }
    return [minIndex, maxIndex];
}
let array = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
console.log(array.getMinMaxIndex(array, 4));