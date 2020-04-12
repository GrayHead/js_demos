let number1 = 573256786; //4
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
    do {num = num.toString().split("").reduce((a, b) => +a + +b);
    } while (num > 9)
    return num;
}
console.log(numberToOne2(number1));
console.log(numberToOne2(number2));
console.log(numberToOne2(number3));
console.log(numberToOne2(number4));