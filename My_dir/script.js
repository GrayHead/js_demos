// Додає цифри b числi, поки не буде одне число
/*let number1 = 573256786; //4
let number2 = 5732567867653; //7
let number3 = 9763512573256786; //1
let number4 = 4322;//2


function numberToOne(num) {
    let sum = num.toString().split("").reduce((a, b) => +a + +b);
    return (sum > 9) ? numberToOne(sum) : sum;
}

console.log(numberToOne(number1));
console.log(numberToOne(number2));
console.log(numberToOne(number3));
console.log(numberToOne(number4));

function numberToOne2(num) {
    do {
        num = num.toString().split("").reduce((a, b) => +a + +b);
    } while (num > 9)
    return num;
}
console.log(numberToOne2(number1));
console.log(numberToOne2(number2));
console.log(numberToOne2(number3));
console.log(numberToOne2(number4));*/

// (2) rail fence cipher algorithm js
/*
String.prototype.encrypt = function(rows = 3) {
    rows = rows || 3
    let fence = [];
    for (let i = 0; i < rows; i++) fence.push([])
    let rail = 0;
    let change = 1;

    for (let char of this.split("")) {
        fence[rail].push(char)
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    }

    let r = '';
    for (let rail of fence) r += rail.join("")

    return r
}


// Decoding
String.prototype.decrypt = function(rows = 3) {
    rows = rows || 3
    let fence = [];
    for (let i = 0; i < rows; i++) fence.push([])
    let rail = 0;
    let change = 1;

    this.split("").forEach(char => {
        fence[rail].push(char)
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    })

    const rFence = [];
    for (let i = 0; i < rows; i++) rFence.push([])

    i = 0
    let s = this.split("")
    console.log(s);
    for (r of fence) {
        for (let j = 0; j < r.length; j++) rFence[i].push(s.shift())
        i++
    }
    console.log(rFence[0]);
    console.log(rFence[1]);
    console.log(rFence[2]);
    console.log(s);
    rail = 0
    change = 1
    var r = ""
    for (var i = 0; i < this.length; i++) {
        r += rFence[rail].shift()
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    }

    return r
}

let text = "Марічка, бісова ти дитина!"
let encodedText =  text.encrypt(3);
console.log(encodedText);
let decodedText = encodedText.decrypt(3);
console.log(decodedText);*/

// (3) Проаеряет есть ли повторяющиеся буквы
/*function isIsogram(str){
    let flag = true;
    let arrStr = str.split("");
    arrStr.map((elem, index) => {
        for (let i = 0; i < arrStr.length; i++) {

            if (index != i && elem.toLowerCase() === arrStr[i].toLowerCase() {
                flag = false;
            }
        }

    })
    return flag;
}*/

// version 2
function isIsogram2(str){
    for (let i = 0; i < str.length; i++) {
        let splicedStr = str.replace(str.charAt(i), '')
        if (splicedStr.includes(str.split("")[i].toLowerCase()) || splicedStr.includes(str.split("")[i].toLocaleUpperCase())) return false;
    }
    return true;
}