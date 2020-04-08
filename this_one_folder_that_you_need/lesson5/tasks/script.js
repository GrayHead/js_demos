// -  Створити функцію конструктор для об'єкту який описує теги
function Tag(tagName, description, ...attrs) {
    this.tagName = tagName;
    this.description = description;
    this.attributes = [];
    for (let i = 0; i < attrs.length; i += 2) {
        this.attributes.push({attrName: attrs[i], attrDescription: attrs[i+1]});
    }
}
let tagA = new Tag("a","describe link on other page/site or part of page","src", "there is a link",
    "style", "describe general stylyzation", "id", "allows set ID", );
let tagDiv = new Tag("div","simple block element", "style",
    "describe general stylyzation", "id", "allows set ID", "class","allows set class");
let tagH1 = new Tag("h1","describe header title of all page", "style",
    "describe general stylyzation", "id", "allows set ID", "class","allows set class");
let tagSpan = new Tag("span","simple inline element", "style",
    "describe general stylyzation", "id", "allows set ID", );
let tagInput = new Tag("input","describe field where you can fill by some information",
    "type","describe a type of iput value", "style", "describe general stylyzation", "id", "allows set ID", "class","allows set class");
let tagOption = new Tag("option","describe a list-item, made by 'select' tag", "selected","describe that this option are selected", "style",
    "describe general stylyzation", "id", "allows set ID", );
let tagSelect = new Tag("select","simple inline element", "style",
    "describe general stylyzation", "id", "allows set ID",);
console.log(tagA);

// -  Створити класс  для об'єкту який описує теги
class SomeTag {
    constructor(tagName, description, ...attrs) {
        this.tagName = tagName;
        this.description = description;
        this.attributes = [];
        for (let i = 0; i < attrs.length; i += 2) {
            this.attributes.push({attrName: attrs[i], attrDescription: attrs[i+1]});
        }
    }
}
let someATag = new SomeTag("a","describe link on other page/site or part of page","src", "there is a link",
    "style", "describe general stylyzation", "id", "allows set ID", );
console.log(someATag);

// 333333
let justCar = {
    model: "Moscvich",
    manufacturer: "VAZ",
    year: 1986,
    maxSpeed: 120,
    enginValue: 3.2,

    drive: function () {
        document.write(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        document.write("<br>");
    },
    info: function () {
        let obj = this;

        for (const key in obj) {
            if (typeof obj[key] == "object") {
                document.write(`${key}:  <br>`);
                for (const key2 in obj[key]) {
                    document.write(`${key2}:  ${obj[key][key2]}`);
                    document.write("<br>");
                }
            } else if (typeof (this[key]) != "function") {
                document.write(`${key}:  ${obj[key]}`);
                document.write("<br>");
            }
        }
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed = newSpeed;
    },
    changeYear: function (newValue){
        this.year = newValue;
    },
    addDriver: function (newDriver) {
        this.driver = newDriver;
    }
};
// 4444444
function getNewCar (model, manufacturer, year, maxSpeed, enginValue)  {
    this.model = model,
    this.manufacturer = manufacturer,
    this.year = year,
    this.maxSpeed = maxSpeed,
    this.enginValue = enginValue,

    this.drive = function () {
        document.write(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        document.write("<br>");
    },
    this.info = function () {
        let obj = this;

        for (const key in obj) {
            if (typeof obj[key] == "object") {
                document.write(`${key}:  <br>`);
                for (const key2 in obj[key]) {
                    document.write(`${key2}:  ${obj[key][key2]}`);
                    document.write("<br>");
                }
            } else if (typeof (this[key]) != "function") {
                document.write(`${key}:  ${obj[key]}`);
                document.write("<br>");
            }
        }
    },
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    },
    this.changeYear = function (newValue){
        this.year = newValue;
    },
    this.addDriver = function (newDriver) {
        this.driver = newDriver;
    }
};
let volvo = new getNewCar("Volvo", "zavod", "2017", "240", "4");
console.log(volvo);

// Class
class Car {

    constructor (model, manufacturer, year, maxSpeed, enginValue) {
        this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.enginValue = enginValue;
    }

    drive () {
        document.write(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        document.write("<br>");
    }
    info () {
        let obj = this;

        for (const key in obj) {
            if (typeof obj[key] == "object") {
                document.write(`${key}:  <br>`);
                for (const key2 in obj[key]) {
                    document.write(`${key2}:  ${obj[key][key2]}`);
                    document.write("<br>");
                }
            } else if (typeof (this[key]) != "function") {
                document.write(`${key}:  ${obj[key]}`);
                document.write("<br>");
            }
        }
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    changeYear (newValue){
        this.year = newValue;
    }
    addDriver (newDriver) {
        this.driver = newDriver;
    }
}

let pegueot = new Car("Pegueot", "zavod2", "2020", "320", "6");
console.log(pegueot);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

/*class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let nadya = new Cinderella("Nadya", 18, 34);
let vika = new Cinderella("Vika", 21, 36);
let igor = new Cinderella("Igor", 48, 44);
let lusya = new Cinderella("Lusya", 24, 35);
let alla = new Cinderella("Alla", 31, 37);
let olya = new Cinderella("Olya", 14, 28);
let nastya = new Cinderella("Nastya", 26, 35);
let katya = new Cinderella("Katya", 24, 34);
let ira = new Cinderella("Ira", 36, 35);
let masha = new Cinderella("Masha", 19, 36);

let cinderellas = [nadya, vika, igor, lusya, alla, olya, nastya, katya, ira, masha];

class Princ extends  Cinderella{
    constructor(name, age, findedSize) {
        super(name, age);
        this.findedSize = findedSize;
        delete this.footSize;
    }

}

let princ = new Princ("Vitalik", 20, 45);

let princWife = [];

for (const cind of cinderellas) {
    if (cind.footSize === princ.findedSize) {
        princWife.push(JSON.parse(JSON.stringify(cind)));
        console.log(princWife);
    }
}
if (princWife.length > 1){
    document.write(`Выбирай!!! <br>`);
    for (const obj of princWife) {
        document.write(`${obj.name}, ${obj.age} лет <br>`);
    }
} else if (princWife.length === 1){
    let wife = princWife[0];
    document.write(`Вот она, твоя любимая!!! <br>`);
    document.write(`${wife.name}, ${wife.age} лет <br>`);
} else {
    document.write(`Drochi! <br>`);
}*/
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
function Cinderella2(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let nadya2 = new Cinderella2("Nadya", 18, 34);
let vika2 = new Cinderella2("Vika", 21, 36);
let igor2 = new Cinderella2("Igor", 48, 44);
let lusya2 = new Cinderella2("Lusya", 24, 35);
let alla2 = new Cinderella2("Alla", 31, 37);
let olya2 = new Cinderella2("Olya", 14, 28);
let nastya2 = new Cinderella2("Nastya", 26, 35);
let katya2 = new Cinderella2("Katya", 24, 34);
let ira2 = new Cinderella2("Ira", 36, 35);
let masha2 = new Cinderella2("Masha", 19, 36);

let cinderellas2 = [nadya2, vika2, igor2, lusya2, alla2, olya2, nastya2, katya2, ira2, masha2];
function Princ2(name, age, findedSize) {
    this.name = name;
    this.age = age;
    this.findedSize = findedSize;

    this.findCinderella = function (cinderellas) {
        var sizeToFind
        if (arguments.length === 1) {
            sizeToFind = this.findedSize;
        } else {
            sizeToFind = arguments[1];
        }
        console.log(arguments.length);
        console.log(cinderellas);
        console.log(sizeToFind);
        /*if (arguments.length > 1) {
            this.findedSize = arguments[1];
        }
        let sizeToFind = this.findedSize;*/
        let princWife = [];
        for (const cind of cinderellas) {
            if (cind.footSize === sizeToFind) {
                princWife.push(JSON.parse(JSON.stringify(cind)));
            }
        }
        console.log(princWife);
        if (princWife.length > 1){
            document.write(`Выбирай!!! <br>`);
            for (const obj of princWife) {
                document.write(`${obj.name}, ${obj.age} лет <br>`);
            }
            return  princWife;
        } else if (princWife.length === 1){
            let wife = princWife[0];
            document.write(`Вот она, твоя любимая!!! <br>`);
            document.write(`${wife.name}, ${wife.age} лет <br>`);
            return wife;
        } else {
            document.write(`Left Hand :)`);
        }
        console.log(sizeToFind);
    }
}
let princ2 = new Princ2("Vitalik", 20, 44);
princ2.findCinderella(cinderellas2);