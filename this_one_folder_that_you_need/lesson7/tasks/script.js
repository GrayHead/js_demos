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

