// let foo; // declaration
// foo = 100500; // init
//
// let bar = 100500;
// bar = 200600; // number
// console.log(bar);
// console.log(typeof foo);
// let result = foo + bar;
// console.log(result);
// let num1 = 3;
// let num2 = 10;
// console.log(num2 % num1);

//
//
// let word = 'okten';
// console.log(word);
// console.log(typeof word); // string
//
// let greeting = 'hello';
//
// console.log(greeting + ' ' + word); // concat
//
// console.log(100 + 200 + '!');
// console.log('!' + (100 + 200));

// let numStr = +'100500asd';
// let numStr = parseInt('100500asd');
// console.log(numStr);

// let age = 31;
// let name = 'vasya';
// let msg = 'hello my name is ' + name + ' and my age is - ' + age;
// console.log(msg);
// let msg2 = `hello my name is ${name} and my age is - ${age}`;
// console.log(msg2);

// > < >= <= == != ===
// let ex1 = 100 < 200;
// console.log(ex1);
// console.log(typeof ex1);// boolean
// console.log(5 === '5');


// console.log(!!0);
// console.log(!!NaN);
// console.log(!!undefined);
// console.log(!!null);
// console.log(!!'');

// let x = 0;
// let y = x + 100;
// console.log(x, y);

//// index        0   1   2
// let numbers = [11, 22, 33];
// console.log(numbers);
// console.log(numbers[0]); // 11
// console.log(numbers[100500]);
// numbers[3] = 100500;
// console.log(numbers);
// console.log(typeof numbers);
// let numsCopy = numbers;
// console.log(numsCopy);
// numsCopy[10] = 'test';
// console.log(numbers);


// let userName = 'vasya';
// let status = true;
//
// let user = {
//     name: userName,
//     age: 31,
//     status: status,
//     skills: ['html', 'js'],
//     wife: {
//         name: 'anna',
//         age: 20
//     }
// };
//
// console.log(user);
// console.log(user.skills);
// console.log(user.skills[0]);
//
// console.log(user['name']);
// console.log(user['skills'][0]);
//
// console.log(user.wife);
// console.log(user['wife']);
//
// console.log(user.wife.name);
// console.log(user['wife'].name);


// let users = [
//     {name: 'vasya', age: 10}, // 0
//     {name: 'petya', age: 12}, // 1
//     {name: 'olya', age: 28}, // 2
//     {name: 'yana', age: 16} // 3
// ];
//
// console.log(users);
// let vasya = users[0];
// console.log(vasya['age']);

function calc(a, b) {
    return a + b;
}

let number1 = calc(10, 20);
let number2 = calc(100, 200);
console.log(number1, number2);












