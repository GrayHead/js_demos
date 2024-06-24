/*numbers*/
let num: number;
num = 100500;
num = 1000;

// +-*/
let num2 = num + 100500;
console.log(num2);
// ++ -- +=1...
num2++;


/*strings*/
let word: string = 'asdlj';

word = 'hello';
let word2 = 'world';
let result = word + word2;
const space = ' ';
result = word + space + word2;
result = `${word} ${word2}`;


let bool: boolean = true;
bool = false;
// > < >= <= == === !== !=
bool = 100 > 200;


// @ts-ignore
// let anybool: any = '5' == 5;


/*const*/

const PI: number = 3.14;

/*multitype*/

let foobar: any = 'asd';
foobar = 123;
foobar = true;


let multi: number | string = 123;
multi = 'asd';


/*convertation*/
let stringFromNum: string = num + '';

let numberAsString: string = '100500';
let numAsNum: number = +numberAsString;
console.log(numAsNum);
console.log(typeof numAsNum);

let bool2: boolean = !123;
let bool3: boolean = !'asd';
console.log(bool2, bool3);

/*falsy values*/
console.log(!undefined);
console.log(!null);
console.log(!NaN);
console.log(!0);
console.log(!'');

/*object*/
// let user = {
//     id: 1,
//     name: 'kokos'
// }

let user: { id: number, name: string, status?: boolean } = {
    id: 1,
    name: 'kokos',
    // status: true
}

let numbers: number[] = [11, 22, 33];
let strings: string[] = ['asdasd', 'qweqwe'];
let users: { id: number, name: string, status?: boolean; }[] = [
    user,
    user,
    user,
    user,
];

interface User {
    id: number;
    name: string;
    status?: boolean;
}

let users2: User[] = [
    user,
    user,
    user,
    user,
];


