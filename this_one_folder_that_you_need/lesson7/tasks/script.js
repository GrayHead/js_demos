// - Создать произвольный елемент с id = text.
//     Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let btn = document.getElementById("button");
let text = document.getElementById("text");

btn.onclick = function (e ) {
    // text.style.backgroundColor = "transparent";
    text.remove();
}
// +- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let hiddenBtn = document.querySelector(".hiddenBtn");
hiddenBtn.onclick = function (e) {
    if (this.style.opacity > 0) {
        this.style.opacity = "0";
    } else {
        this.style.opacity = "1";
    }
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
let checkAgeForm = document.forms.checkAge;
let ageInput = checkAgeForm.querySelector("#ageField");
let ageBtn  = checkAgeForm.querySelector("#ageChecker");
let ageText = checkAgeForm.querySelector("div");

ageBtn.onclick = function (e) {
    e.preventDefault();
    let age = parseInt(ageInput.value);
    if (Number.isInteger(age)) {
        if (age < 18) {
            ageText.innerText = "Пшёл отсюда, сосунок!!!";
            ageInput.value = "";
        } else  if (age >= 18 && age <=100){
            ageText.innerText = "Заходи, родной :)";
            ageInput.value = "Или иди за пивашкой";
        } else {
            ageText.innerText = "Кажется ты мертв :(";
            ageInput.value = "Или ты воскрес?)";
        }
    } else {
        ageText.innerText = "Попробуй еще аз ввести!!!!";
        ageInput.value = "";
    }
}

    // - Создайте меню, которое раскрывается/сворачивается при клике
let mainNav = document.querySelector("#mainNav");
let navBtn = document.querySelector("#menuBtn");
let listItems = mainNav.children;
let subLists = mainNav.querySelectorAll("ul");

navBtn.onclick = function (e) {
    /*if (mainNav.style.left === "") {
        mainNav.style.left = "0px";
    } else if (mainNav.style.left === "-400px") {
        mainNav.style.left = "0px";
    } else if (mainNav.style.left === "0px"){
        mainNav.style.left = "-400px";
    }*/
    if (mainNav.style.left === "0px") {
        mainNav.style.left = "-400px";
    } else {
        mainNav.style.left = "0px";
    }
}

for (const item of listItems) {
    if (item.querySelector("ul")) {
        let ul = item.querySelector("ul");
        item.onclick = function (e) {
            if (!ul.classList.contains("visible")) {
                for (const el of subLists) {
                    el.classList.remove("visible");
                    el.parentElement.style.backgroundColor = "initial";
                }
                ul.classList.add("visible");
                item.style.backgroundColor = "blue";
            } else {
                ul.classList.remove("visible")
                item.style.backgroundColor = "initial";
            }
        }
    }
}

document.write("<br>");


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {
        let comments = [];
        for (let i = 0; i < 10; i++) {
            let obj = {};
            obj.name = json[i].name;
            obj.email = json[i].email;
            obj.body = json[i].body;
            comments.push(obj);
        }
        console.log(comments);

    let commentContainer = document.getElementById("comments-block");
    commentContainer.classList.add("comment-container");

    for (let com of comments) {
        let comment = document.createElement("div");
        comment.classList.add("comment-item");

        comment.onclick = function (e) {
            this.classList.toggle("active");
        }

        let commentHead = document.createElement("div");
        commentHead.classList.add("comment-head");
            let commentTitle = document.createElement("h3");
            commentTitle.innerText = com.name;
            commentTitle.classList.add("comment-title");
            commentHead.appendChild(commentTitle);

            let comBtn = document.createElement("button");
            comBtn.setAttribute("type", "button");
            commentHead.appendChild(comBtn);

        comment.appendChild(commentHead);

        let  commentBody = document.createElement("div");
        commentBody.classList.add("comment-body");

            let commentText = document.createElement("p");
            commentText.innerHTML = com.body.split("<br>").join(" ");
            commentText.classList.add("comment-text");
            commentBody.appendChild(commentText);

            let commentMail = document.createElement("p");
            commentMail.innerText = com.email;
            commentMail.classList.add("comment-mail");
            commentBody.appendChild(commentMail)

        comment.appendChild(commentBody);

        commentContainer.appendChild(comment);
    }
    })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться н
// а консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let auctionContainer = document.getElementById("forms-container");
let auctionBtn = auctionContainer.querySelector("button");
let divText = auctionContainer.querySelector("div");
let person1 = document.forms.player1;
let person2 = document.forms.player2;

auctionBtn.onclick = function (e) {
    let name1 = person1.name.value;
    let name2 = person2.name.value;
    let money1 = +person1.money.value;
    let money2  = +person2.money.value;

    console.log(`player 1: name-${name1},  money-${money1}`);
    console.log(`player 2: name-${name2},  money-${money2}`);

    if (!money1 || !money2) {
        divText.innerText = "Некорректная сумма!!";
        return;
    }
    if (name1 === "" || name2 === "") {
        divText.innerText = "Не удалось идентифицировать игрока!!!";
        return;
    }

    if (money1 > money2) {
        divText.innerText = `Побеждает ${name1}, ставка-${money1}`;
    } else if (money1 < money2) {
        divText.innerText = `Побеждает ${name2}, ставка-${money2}`;
    } else  {
        divText.innerText = `Ничья, повышаем ставки!!! Текущая ставка-${money2}`;
    }
}

// функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
let tableContainer = document.getElementById("table-generator");

function generateTable(rows, cols, container) {
    let table = document.createElement("table");
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let col = document.createElement("td");
            col.innerText = `${(j + 1) + (cols)*i}`;
            col.style.backgroundColor = `rgb(${255/cols*j}, ${255/rows*i}, 200)`;
            col.style.padding = "20px";

            row.appendChild(col);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
}
// generateTable(6,12,tableContainer);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let tableForm = document.forms.tableInput;
let tableGenBtn = tableForm.querySelector("button");

tableGenBtn.onclick = function (e) {
    e.preventDefault();
    let rows = +tableForm.rows.value;
    console.log(rows);
    let cols = +tableForm.cols.value;
    console.log(cols);
    let content = tableForm.content.value;
    if (!content) content = " ";
    console.log(content);
    if (rows && cols && content) {
        generateTable2(rows, cols, content);
    }
}

function generateTable2(rows, cols, content) {
    // if (tableContainer.querySelector("table")) {
    //     tableContainer.querySelector("table").remove();
    // }
    let contentArr = content.split(" ");
    let table = document.createElement("table");
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let col = document.createElement("td");
            col.innerText = contentArr[((j + 1) + (cols)*i -1) % contentArr.length];
            col.style.backgroundColor = `rgb(${255/cols*j}, ${255/rows*i}, 200)`;
            col.style.padding = "20px";

            row.appendChild(col);
        }
        table.appendChild(row);
    }
    if (tableContainer.querySelector("table")) {
        tableContainer.querySelector("table").replaceWith(table);  //Заменяет елемент node
    } else {
        tableContainer.appendChild(table);
    }
    // tableContainer.appendChild(table);
}

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let carouselContainer = document.getElementById("carousel");
let carouselItems = carouselContainer.querySelectorAll(".carousel-item");

let currentSlide = 1;
function plusSlides(n) {
    currentSlide += n;
    if (currentSlide > carouselItems.length) {
        currentSlide = 1;
    }
    if (currentSlide < 1) {
        currentSlide = carouselItems.length;
    }
    for (item of carouselItems) {
        item.classList.remove("active");
    }
    carouselItems[currentSlide - 1].classList.add("active");
}
// Version 2
let carouselContainer2 = document.getElementById("carousel2");
let carouselInerBox = carouselContainer2.querySelector(".carousel-container");
let carouselItems2 = carouselContainer2.querySelectorAll(".carousel-item");

let left = 0;
let itemsCount = carouselItems2.length;
carouselInerBox.style.width = `${itemsCount * 200}px`
function plusSlides2(n) {
    left += n*200;

    if (left > 0) {
        left = -(itemsCount * 200 - 600);
    }
    if (left < -(itemsCount * 200 - 600)) {
        left = 0;
    }
    console.log(left);
    carouselInerBox.style.left = `${left}px`;
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let matWords = ["сука","блядь","нахуй","уебок","пидор","гандон","педрила","хуесос","урод","гандон","пидор","манда","ебать","пиздец","сучка","еб",];
let matBtn = document.getElementById("matBtn");
let matPopUp = document.getElementById("mat-pop_up");
let popUpContent = matPopUp.innerHTML;
matBtn.onclick = function (e) {
    e.preventDefault();
    let text = document.forms.matForm.matField.value;
    let textArr = text.split(" ");
    let flag;

    for (const word of textArr) {
        console.log(word);
        if (~matWords.indexOf(word.toLocaleLowerCase())) {
            flag = true;
        }
    }
    if (flag) {
        matPopUp.innerHTML = popUpContent;
        matPopUp.classList.add("active");
    } else {
        matPopUp.querySelector("div").innerHTML = "Какой вы умничка!!!<br>Ни одного плохого слова :)";
        matPopUp.querySelector("button").innerText = "Пасиб :)";
        matPopUp.classList.add("active");
    }

}
function removePopUp() {
    matPopUp.classList.remove("active");
}

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление
// по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
let rulesContainer = document.getElementById("rules-wrap");
let contentList = rulesContainer.querySelector(".content ul");
let rules = rulesContainer.querySelectorAll(".rules");

for (let i = 0; i < rules.length; i++) {

    let contentListItem = document.createElement("li");
    let liItem = document.createElement("a");
    liItem.innerHTML = rules[i].querySelector("h2").innerHTML;
    contentListItem.appendChild(liItem).setAttribute("href", `#rule${i+1}`);

    contentList.appendChild(contentListItem);

    contentListItem.onclick = function (e) {
        rules[i].style.transition = "none";
        rules[i].style.backgroundColor = "#ff0000";
        setTimeout(function () {
            rules[i].style.transition = "background-color .8s linear";
            rules[i].style.backgroundColor = "#ffffff";
        }, 1000);
    }
}
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
//     Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
let usersMainContainer = document.getElementById("users-container");
let usersBox = usersMainContainer.querySelector(".users");
// Просто функция которая печатает массив
function deepWrite(arrOfObj) {
    for (const obj of arrOfObj) {
        let div = document.createElement("div");
        for (const key in obj) {
            if (typeof obj[key] === "object") {
                div.innerText += `${key.toUpperCase()}: `;
                for (const key2 in obj[key]) {
                    div.innerText += `${key2}:  ${obj[key][key2]}, `;
                }
            } else {
                div.innerText += `${key}:  ${obj[key]}, `;
            }
        }
        usersBox.appendChild(div);
    }
    return "<br>";
}
// А тут уже программа
let userObj = JSON.parse(JSON.stringify(usersWithAddress));
deepWrite(userObj);



let falseCheck = document.forms.usersCheckBoxes.falseCheck;
let ageCheck = document.forms.usersCheckBoxes.ageCheck;
let kyivCheck = document.forms.usersCheckBoxes.kyivCheck;
let allCheckboxes = [falseCheck, ageCheck, kyivCheck];

for (const checkbox of allCheckboxes) {
    checkbox.onclick = function (e) {
        usersBox.innerHTML = "";
        let filteredArr = JSON.parse(JSON.stringify(userObj));
        if (falseCheck.checked) {
            filteredArr = filterFalse(filteredArr);
        }
        if (ageCheck.checked) {
            filteredArr = filterAge(filteredArr);
        }
        if (kyivCheck.checked) {
            filteredArr = filterKyiv(filteredArr);
        }
        deepWrite(filteredArr);
    }
}
/*
falseCheck.onclick = function (e) {
    let newUsers;
    if (this.checked) {
        newUsers = userObj.filter(user => !user.status);
        usersBox.innerHTML = "";
        deepWrite(newUsers);
    } else {
        deepWrite(userObj);
    }
    console.log(newUsers);
}

*/


function filterFalse(arr) {
    let newArr = arr.filter(obj => !obj.status);
    return newArr;
}
function filterAge(arr) {
    let newArr = arr.filter(obj => obj.age >= 29);
    return newArr;
}
function filterKyiv(arr) {
    let newArr = arr.filter(obj => obj.address.city === 'Kyiv');
    return newArr;
}

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
//     Функция создает в боди 2 кнопки (назад/вперед)при нажатии вперед, вы переходите к дочернему элементу,
//     при еще одном нажатии на "вперед", вы переходите к следующему
// дочернему элементу (лежащему на одном уровне) НО если у (какого-либо)дочеренего элемента есть дети,
//     то ажатие "вперед" позволяет нам войти внутрь элемента и выводит первого ребенка. и тд.Когда все дети заканчиваются,
//     мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

let recursionContainer = document.getElementById("recursion-list");
let idNum = 1;
let marginCount = 0;
function elementRecursion(container) {
    let elements = container.children;
    for (const elem of elements) {

            if (elem.hasChildNodes()) {
                marginCount++;
                elem.setAttribute("id", `recurs${idNum++}`);
                // console.log(elem);
                elementRecursion(elem);
                marginCount--;
            } else {
                elem.style.width = "200px";
                elem.style.height = "20px";
                elem.style.margin = "10px";
                elem.style.marginLeft = `${marginCount * 20}px`;
                elem.style.backgroundColor = "transparent";
                elem.style.border = "3px solid green";
                elem.setAttribute("id", `recurs${idNum++}`);
                // elem.classList.add(`class${classNum++}`)
                // console.log(elem);
            }

    }

    if (recursionContainer === container) {
        let leftBtn = document.createElement("button");
        leftBtn.innerText = "UP";
        leftBtn.setAttribute("onclick", "changeRecursionId(-1)");
        container.appendChild(leftBtn);

        let rightBtn = document.createElement("button");
        rightBtn.innerText = "DOWN";
        rightBtn.setAttribute("onclick", "changeRecursionId(1)");
        container.appendChild(rightBtn);
    }
}
elementRecursion(recursionContainer);

let madeElements = recursionContainer.querySelectorAll("div");

let recursionId = 1;
madeElements[recursionId - 1].style.backgroundColor = "darkred";
function changeRecursionId(n) {
    recursionId += n;
    if (recursionId < 1) {
        recursionId = idNum-1;
    }
    if (recursionId > idNum-1) {
        recursionId = 1;
    }
    for (const el of madeElements) {
        el.style.backgroundColor = "transparent";
    }
    console.log(recursionId);
    madeElements[recursionId - 1].style.backgroundColor = "darkred";
    console.log(madeElements[recursionId - 1]);
    // newSelectedElement.style.backgroundColor = "blue";
}

// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
let markupContainer = document.getElementById("text-markup");
markupContainer.onmouseup = function (e) {
    console.log(document.getSelection().toString());
    let selection = document.getSelection().toString();
    let arrText = markupContainer.innerText.split(selection);

    /*let span = document.createElement("span");
    span.style.backgroundColor = "blue";
    span.innerText = selection;*/
    // `<span>${selection}</span>`
    if (selection) {
        markupContainer.innerHTML = arrText[0];
        markupContainer.innerHTML += `<span style="background-color: darkblue; color: #fff;">${selection}</span>`;
        markupContainer.innerHTML += arrText[1];
    }

}
