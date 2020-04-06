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
