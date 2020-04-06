let box = document.querySelector(".box");
let firstArr = ["Milk","Chocolate", "tree", "Bananas", "orange", "Cabbage", "Onion", "Salat", "Coffe", "Mellon", "Lemon"];
// - створити функцію яка виводить масив
function writeArr(arr) {
    for (let arrElement of arr) {
        box.innerHTML += arrElement + " - ";
    }
    box.innerHTML += "<br>";
}
writeArr(firstArr);
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
let number = prompt("Write number of members");

function getRandomArr(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}
let randomArr = getRandomArr(number);
writeArr(randomArr);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function getLower(num1, num2, num3) {
    let lower;
    if (num1 < num2 && num1 < num3) {
        lower = num1;
        box.innerHTML += `${lower}  - наименьшее число` + "<br>";
        return;
    } else
    if (num2 < num1 && num2 < num3) {
        lower = num2;
        box.innerHTML += `${lower}  - наименьшее число` + "<br>";
        return;
    } else
    if (num3 < num2 && num3 < num1) {
        lower = num3;
        box.innerHTML += `${lower}  - наименьшее число` + "<br>";
        return;
    }
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        box.innerHTML += "Кажется у вас тут есть одинаковые числа" + "<br>";
        return;
    }
    box.innerHTML += `${lower}  - наименьшее число` + "<br>";
}
getLower(5,9,2);
getLower(33,45,45);
getLower(945,765,456);
// створити функцію яка приймає три числа та виводить та повертає найбільше.
function getBigest(num1, num2, num3) {
   let arr = [num1, num2, num3];

    for (let i = 0; i < 3; i++) {
        let bigest = arr[i];
        for (let j =i + 1; j < 3; j++) {
            if (arr[j] > bigest) {
                arr[i] = arr[j];
                arr[j] =  bigest;
                bigest = arr[i];
            }
        }
    }
    if (arr[0] === arr[1] && arr[0] === arr[2]) {
        box.innerHTML += `У вас три одинаковых числа` + "<br>";
        return;
    } else if (arr[0] === arr[1] || arr[0] === arr[2] || arr[2] === arr[1]) {
        box.innerHTML += `У вас два одинаковых числа` + "<br>";
    } else {
        box.innerHTML += `${arr[0]}  - наибольшее число` + "<br>";
    }
}
getBigest(5,9,9);
getBigest(33,33,33);
getBigest(945,765,456);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// Возьмем переменную randomArr со второго задания
function getMinWriteMax(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let lower = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < lower) {
                arr[i] = arr[j];
                arr[j] = lower;
                lower = arr[i];
            }
        }
    }
    console.log(arr);
    box.innerHTML += `Наибольшее число - это ${arr[arr.length - 1]}` + "<br>";
    return arr[0];
}
let minOfRandom = getMinWriteMax(randomArr);
box.innerHTML += `Наименьшее число - это ${minOfRandom}` + "<br>";
// version 2
function getMinWriteMax2(arg) {
    let arr = arguments;
    console.log(arr);
    let min = arr[0];
    let max = arr[arr.length - 1];
    for (const el of arr) {
        if (el > max) max = el;
        if (el < min) min = el;
    }
    box.innerHTML += `Наибольшее число - это ${max}` + "<br>";
    return min;
}
let minOfRandom2 = getMinWriteMax2(34,23,8,65,67,7,23,98,34,12,45,84);
box.innerHTML += `Наименьшее число - это ${minOfRandom2}` + "<br>";
// + створити функцію яка виводить масив
// writeArr() уже есть
// - створити функцію яка повертає найбільше число з масиву
// Возьмем переменную randomArr со второго задания
function getMax(arr) {
    let max = arr[0];
    for (const elem of arr) {
        if (elem > max) max = elem;
    }
    return max;
}

let max = getMax(randomArr);
box.innerHTML += `Only Max - ${max}` + "<br>";

// - створити функцію яка повертає найменьше число з масиву
function getMin(arr) {
    let min = arr[0];
    for (const elem of arr) {
        if (elem < min) min = elem;
    }
    return min;
}

let min = getMin(randomArr);
box.innerHTML += `Only min -  ${min}` + "<br>";

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function getSum(arr) {
    let sum = 0;
    for (const elem of arr) {
        sum += elem;
    }
    return sum;
}
let sum = getSum(randomArr);
box.innerHTML += `Sum is ${sum} <br>`;

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function getAverage(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return (sum / arr.length).toFixed(3);
}
let average = getAverage(randomArr);
box.innerHTML += `Average is ${average} <br>`;
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

function getObjectLength(obj) {
    return obj.length;
}
let objectLength = getObjectLength(rules);
box.innerHTML += `objectLength is ${objectLength} <br>`;

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// First veresion
function getAllField(arr) {
    let totalField = 0;
    for (const obj of arr) {
        for (const key in obj) {
            totalField++;
        }
    }
    return totalField;
}
let countOfAllFields = getAllField(rules, 0);
box.innerHTML += `Всего полей обьектов в массиве обьэктов is ${countOfAllFields} <br>`;
let users = [{
    name: 'vasya',
    age: [31, 43 , 67],
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: {home: 1, dirt: true}}
}, {
    name: 'petya',
    age: [31, 43 , 67],
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: {home: 1, dirt: true}}
}, {
    name: 'kolya',
    age: [31, 43 , 67],
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: {home: 1, dirt: true}}
}, {
    name: 'olya',
    age: [31, 43 , 67],
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: {home: 1, dirt: true}}
}, {
    name: 'max',
    age: [31, 43 , 67],
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: {home: 1, dirt: true}}
},];
// Second veresion

let j = getAllField(users,0);
// var k;
function getAllField(obj,i) {
    k = i;
    for (const key in obj) {
        if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
            let innerObj = obj[key];
            console.log(innerObj);
            console.log(k);
            getAllField(innerObj,k);
        } else if (Array.isArray(obj[key])) {
            getAllField(obj[key],k);
        }
        else {
            console.log(obj[key] + " - ");
            k++;
            console.log(k);
        }
    }

    return k;
}
console.log(j);

/*
function rec(obj,i) {
    for (const key in obj) {
        if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
            let innerObj = obj[key];
            console.log(innerObj);
            rec(obj[key],i);
        } else if (Array.isArray(obj[key])) {
            for (el of obj[key]) {

            }
                console.log(el + " - ");
                i++;
            }
         else {
                onsole.log(el + " - ");
                i++;

        }
    }
}*/
/*Как работает функция? Интересно......
При первой итерации создается целевой масив куда будут пушиться остальные части
Каждый обьект пушиться по скобкам
когда скобка закрываеться, соответствующая часть массива через ретюрн пушиться во внешнюю обочку,
    которая в свою очередь пушиться через ретюрн во внешнюю функцию которая вызывала ее.
    Возвращать колличество ключей можна по длинне конечного массива*/
let objects = [{rtyh: 2, yth: 2, yhd: {reg: 2, rgr: {nfef:23}}, ikik: {toilet: 1, umijk: {kuiyk: 1, uyj: 2}}}];
function getAllKeys(massiv) {
    let result = [];
    for (let key in massiv) {
        if  (typeof massiv[key] != "object") {
            result.push(massiv[key]);
        }
        if(massiv[key] && typeof massiv[key] === "object") result.push(...getAllKeys(massiv[key]));
    }
    return result;
}
box.innerHTML += `Все внешние ключи массива - ${getAllKeys(users).length} <br>`;

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
function getSumOfArrs(arr1, arr2) {
    let resultArr = arr1.length > arr2.length ? addElem(arr1, arr2) : addElem(arr2, arr1);
    function addElem(el1, el2) {
        let sumArr = [];
        for (let i = 0; i < arr1.length ; i++) {
            sumArr.push(el1[i] + el2[i]);
        }
        return sumArr;
    }
    return resultArr;
}

let sumTwoArr = getSumOfArrs([1,2,3,4,5,6,7], [4,6,7,5,1,3,2]);
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log([4, 6, 7, 5, 1, 3, 2]);
box.innerHTML += `Сумма еллементов двух массивов - ${sumTwoArr} <br>`;

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function swapIndex(arr, i) {
    if (i == 0) {
        console.log("Должно быть целое число!!!")
    }
    let index;
    if (i % arr.length === 0) {
        index = 0;
        i = arr.length - 1;
    } else if (i > arr.length) {
        i = i % arr.length - 1;
        index = i + 1;
    } else {
        index = i;
        i--;
    }
    let swap = JSON.parse(JSON.stringify(arr[i]));
    arr[i] = JSON.parse(JSON.stringify(arr[index]));
    arr[index] = JSON.parse(JSON.stringify(swap));
    return arr;
}
console.log([2, true, "34", {name: 0, age: 20}, 4, [1, 2, 3]]);
let swaped = swapIndex([2, true, "34", {name: 0, age: 20}, 4, [1,2,3]], 2);
console.log(swaped);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100

// Version 1
function pushZeroBack(arr) {
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i,1);
            zeroCount++;
            i--;
        }
    }
    for (let i = 0; i < zeroCount; i++) {
        arr.push(0);
    }
    return arr;
}
let arrWithZerro = [4,7,0,3,5,0,0,3,2,0,9];
console.log(arrWithZerro);
console.log(pushZeroBack(arrWithZerro));
// Version 2  Через стрингу (только для извращенцев)
function pushZeroBack2(arr) {
    let string = "";
    let zeroCount = 0;
    for (const el of arr) {
        if(el) {
            string += el;
        } else zeroCount++;
    }
    console.log(string);
    for (let i = 0; i < arr.length; i++) {
        if(string[i]) {
            arr[i] = +string[i];
        } else arr[i] = 0;
    }
    return arr;
}
console.log("*********************");
let arrWithZerro2 = [4,7,0,3,5,0,0,3,2,0,9];
console.log(arrWithZerro2);
console.log(pushZeroBack2(arrWithZerro2));

// ТУТ ТІПА ІІ ЕТАП.  РОБОТА З ДОМ
// - Додає в боді блок з текстом "Hello owu"
function addHello () {
    let block = document.createElement("div");
    block.innerHTML = "Hello owu";
    document.body.appendChild(block);
}
addHello();
addHello();
addHello();

// Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addElement (element, text) {
    let block = document.createElement(element);
    block.innerHTML = text;

    document.body.appendChild(block);
}
addElement("div", "This is block named 'DIV' ");
addElement("h2", "This is block named 'h2' ");
addElement("em", "This is block named 'em' ");

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let cars = [
    {
        model: "Ford", year: {paper: 1995, ISay: 2012}, power: 567, color: "red",
        driver: {
            name: ["Vasya", {Misha: 1, Misha: 2}, "Vitalik", "Kostya"],
            age:  {mind: 18, realy: 45},
            gender: "male"
        }
    },{
        model: "Volvo", year: 2015, power: 234, color: "violet",
        driver: {
            name: "Anna",
            age:  34,
            gender: "female"
        }
    },{
        model: "Mustang", year: 2018, power: 473, color: "green",
        driver: {
            name: "ernesto",
            age:  28,
            gender: "it"
        }
    },{
        model: "Moscvich", year: 1986, power: 34, color: "orange",
        driver: {
            name: "sanya",
            age:  67,
            gender: "male"
        }
    },{
        model: "Pegueot", year: 2017, power: 567, color: "white",
        driver: {
            name: "kolya",
            age:  34,
            gender: "male"
        }
    },{
        model: "Daweo", year: 2016, power: 567, color: "red",
        driver: {
            name: "sofia",
            age:  43,
            gender: "female"
        }
    },{
        model: "Traktor", year: 2003, power: 5334, color: "#44c934",
        driver: {
            name: "igor",
            age:  34,
            gender: "female"
        }
    },{
        model: "Ford", year: 2014, power: 567, color: "blue",
        driver: {
            name: "illa",
            age: 24 ,
            gender: "male"
        }
    },{
        model: "Mercedes", year: 2018, power: 756, color: "#f6c234",
        driver: {
            name: "ivan",
            age:  23,
            gender: "male"
        }
    },{
        model: "Volkswagen", year: 2013, power: 567, color: "#34d5c9",
        driver: {
            name: "ira",
            age:  19,
            gender: "female"
        }
    }
];
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який
// потрібно додати список цих автомобілів.
function pasteCarList (cars, id) {
    let container = document.getElementById(id);
    for (const car of cars) {
        container.innerHTML += car.model + ", ";
    }
}
pasteCarList(cars, "box");

// -Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Всі властивості авто в обному блоці
function pasteFullList(cars, id) {
    let container = document.getElementById(id);
    for (const car of cars) {
        let card = document.createElement("div");
        rec(car);
        function rec (car) {
            for (const key in car) {
                if (typeof car[key] == "object") {
                    card.innerHTML += key + ":<br>";
                    rec(car[key])
                } else {
                    card.innerHTML += `${key}: ${car[key]} <br>`;
                }
            }
        }
        card.innerHTML += "<br>";
        container.appendChild(card);
    }
}
// pasteFullList(cars, "box");

// -Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок
// Тут трошки не вийшло так як мало бути :(
function pasteFullSeparateList(cars, id) {
    let container = document.getElementById(id);
    for (const car of cars) {
        function rec (car) {
            let card = document.createElement("div");
            /*if (arguments.length == 2) {
                card.appendChild(`<div>${rozdil}</div>`)
            }*/
            for (const key in car) {
                let property = document.createElement("div");
                if (typeof car[key] == "object") {
                    // card.innerHTML += key + ":<br>";
                    let title = document.createElement("h4");
                    title.innerHTML = key;

                    property.appendChild(title);
                    property.appendChild(rec(car[key]));

                } else {
                    // card.innerHTML += `${key}: ${car[key]} <br>`;
                    property.innerHTML = `${key}: ${car[key]}`;
                    property.style.color = "#fff";

                }
                card.appendChild(property);

            }
            card.style.marginBottom = "20px";
            return card;
        }

        container.appendChild(rec(car));
    }
}
pasteFullSeparateList(cars, "box");

// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто
// з відповідними "id" та "user_id", та повертає масив цих з'єднаних об'єктів.
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

function combineArrays(userArr, cityArr) {
    userArr2 = JSON.parse(JSON.stringify(userArr));
    for (let i = 0; i < userArr2.length; i++) {
        for (const city of cityArr) {
            if (userArr2[i].id === city.user_id) {
                let obj = JSON.parse(JSON.stringify(city));
                delete obj.user_id;
                userArr2[i].location = obj;
            }
        }
    }
    return userArr2;
}
let combinedObj = combineArrays(usersWithId, citiesWithId);
console.log(combinedObj);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
let onlyRules  = ['Никому не рассказывать о Бойцовском клубе.','Никогда никому не рассказывать о Бойцовском клубе.','В схватке участвуют только двое.','Не более одного поединка за один раз.','Бойцы сражаются без обуви и голые по пояс.','Поединок продолжается столько, сколько потребуется.','Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.','Новичок обязан принять бой.']
function writeRules(rules, id) {
    let container = document.getElementById(id);
    for (let i = 0; i < rules.length; i++) {
        let rule = document.createElement("div");
        rule.style.marginBottom = "20px";

        let title = document.createElement("h2");
        title.innerHTML = `${i + 1} правило Бойцовского клуба.`
        rule.appendChild(title);

        let body = document.createElement("p");
        body.innerHTML = rules[i];
        rule.appendChild(body);

        container.appendChild(rule);
    }
}
writeRules(onlyRules, "box");