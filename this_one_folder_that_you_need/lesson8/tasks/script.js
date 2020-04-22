// - Дана textarea.  В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
let textAreaInput = document.forms.textAreaForm.textAreaInput;

if (localStorage.getItem("textareaText")) {
    textAreaInput.value = localStorage.getItem("textareaText")
}

textAreaInput.oninput = function (e) {
    console.log(textAreaInput.value);
    localStorage.setItem("textareaText", textAreaInput.value);
}

//     - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

let formElements = document.forms.personalForm.elements;

// Тут мы достаем инфу после перезагрузки
let localStorageObject = JSON.parse(localStorage.getItem("personalForm"));

for (const key in localStorageObject) {
    let targetInput = document.forms.personalForm[key];

    if (targetInput.length > 1 && targetInput[0].type === "radio") {
        let radioId = localStorageObject[key];
        let radioIndex = radioId[radioId.length - 1] - 1;
        targetInput[radioIndex].checked = true;

    } else if (targetInput.type === "checkbox" && localStorageObject[key]) {
        targetInput.checked = true;
    } else {
        targetInput.value = localStorageObject[key];
    }
}

// Тут мы сетаем Локал Сторедж
if (!JSON.parse(localStorage.getItem("personalForm"))) {
    let storageData = {};
    localStorage.setItem("personalForm", JSON.stringify(storageData));
}

for (const el of formElements) {
    if (el.type === "radio") {
        el.onchange = function(e) {
            storageData = JSON.parse(localStorage.getItem("personalForm"));
            if (el.checked) {
                storageData[el.getAttribute("name")] = el.getAttribute("id");
                localStorage.setItem("personalForm", JSON.stringify(storageData));
            } else {
                delete storageData[el.getAttribute("name")];
                localStorage.setItem("personalForm", JSON.stringify(storageData));
            }
        }
    } else if (el.type === "checkbox") {
        el.onchange = function(e) {
            storageData = JSON.parse(localStorage.getItem("personalForm"));
            if (el.checked) {
                storageData[el.getAttribute("name")] = true;
                localStorage.setItem("personalForm", JSON.stringify(storageData));
            } else {
                delete storageData[el.getAttribute("name")];
                localStorage.setItem("personalForm", JSON.stringify(storageData));
            }
        }
    } else {
        el.oninput = function (e) {
            if (el.value) {
                storageData = JSON.parse(localStorage.getItem("personalForm"));
                storageData[el.getAttribute("id")] = el.value;
                localStorage.setItem("personalForm", JSON.stringify(storageData));
            } else {
                storageData = JSON.parse(localStorage.getItem("personalForm"));
                delete storageData[el.getAttribute("id")];
                localStorage.setItem("personalForm", JSON.stringify(storageData));
            }
        }
    }
}

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let comment = document.querySelector("#comment-template").content;
let commentList = document.querySelector("#comment-history ul");
let textArea = document.querySelector("#textArea");
let saveBtn = document.getElementById("save-comment");

saveBtn.onclick = function (e) {
    e.preventDefault();
    if (textArea.value) {
        let newComment = comment.cloneNode(true);
        newComment.querySelector(".comment-text").innerText = textArea.value;
        // Кнопка удаления  remove-btn
        let removeBtn = newComment.querySelector("#remove-btn");
        let confirmation = newComment.querySelector(".confirmation");
        removeBtn.onclick = function () {
            confirmation.classList.add("active");
        }
        confirmation.querySelector("#confirm-no").onclick = function () {
            confirmation.classList.remove("active");
        }
        confirmation.querySelector("#confirm-yes").onclick = function () {
            confirmation.parentElement.remove();
        }
        // Кнопка редактирования  edit-btn
        let editBtn = newComment.querySelector("#edit-btn");
        let editBox = newComment.querySelector(".edit-box");
        editBtn.onclick = function () {
            editBox.classList.add("active");
            this.parentElement.querySelector("#editArea").value = this.parentElement.querySelector(".comment-text").innerText;
        }
        editBox.querySelector("#cancel-edit").onclick = function () {
            editBox.classList.remove("active");
        }
        editBox.querySelector("#save-edit").onclick = function () {
            this.parentElement.parentElement.querySelector(".comment-text").innerText = this.parentElement.parentElement.querySelector("#editArea").value;
            if (this.parentElement.querySelector("#editArea").value === "") {
                confirmation.parentElement.remove();
            }
            this.parentElement.querySelector("#editArea").value = "";
            editBox.classList.remove("active");
        }
        // кнопка вставки текста
        let pasteBtn = newComment.querySelector("#paste-btn");
        pasteBtn.onclick = function () {
            textArea.value = this.parentElement.querySelector(".comment-text").innerHTML;
        }

        commentList.appendChild(newComment);
        textArea.value = "";
    }
}

// editStory  right task :)

// let rollBackBtn = document.getElementById("rollBack");
// let rollForwardBtn = document.getElementById("rollForward");
let pushBtn = document.getElementById("push");
let textArea2 = document.getElementById("textField");
let storyPointsContainer = document.querySelector(".story-points");

if (!localStorage.getItem("textField")) {
    localStorage.setItem("textField", JSON.stringify([]));
}
let key;

key = JSON.parse(localStorage.getItem("textField")).length;
if (key > 0) {
    textArea2.value = JSON.parse(localStorage.getItem("textField"))[key - 1];
}

pushBtn.onclick = function (e) {
    if (textArea2.value){
        let editArr = JSON.parse(localStorage.getItem("textField"));

        if (textArea2.value === editArr[editArr.length - 1]) {
            return;
        }

        if (key < editArr.length) {
            editArr.splice(key - 1);
        }


        editArr.push(textArea2.value);
        // storyPoints.push(div);
        key++;

        localStorage.setItem("textField", JSON.stringify(editArr));
        if (!key) {
            key = editArr.length;
        }

        storyPointsContainer.innerHTML = "";
        for (const el of editArr) {
            let div = document.createElement("div");
            div.innerHTML = el;
            storyPointsContainer.appendChild(div);
        }
    }
}


function rollText(n) {
    let editArr = JSON.parse(localStorage.getItem("textField"));
    key += n;

    if (key < 1){
        key++;
        return;
    } else if (key > editArr.length) {
        key--;
        return;
    }
    // console.log(key);
/*    for (const storyPoint of storyPoints) {
        storyPoint.style.backgroundColor = "white";
    }
    storyPoints[key - 1].style.backgroundColor = "red";*/

    textArea2.value = editArr[key - 1];
}

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
//     в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let contactTemplate = document.getElementById("contactTempl").content;
let contactsBox = document.querySelector("#telephone-book .contacts");

let nameField = document.forms.contactForm.name;
let surnameField = document.forms.contactForm.surname;
let phoneField = document.forms.contactForm.phone;
let ageField = document.forms.contactForm.age;
let mailField = document.forms.contactForm.mail;
let jobField = document.forms.contactForm.job;
let birthdayField = document.forms.contactForm.birthday;
let colorField = document.forms.contactForm.color;

let addContactBtn = document.getElementById("add-contact");
let saveContactBtn = document.getElementById("save-contact");

let contactForm = document.querySelector(".contact-form");

addContactBtn.onclick = function () {
    contactForm.classList.add("active");
}

let contactStorage = JSON.parse(localStorage.getItem("contacts"));
if (!contactStorage) {
    localStorage.setItem("contacts", JSON.stringify([]));
}

if (contactStorage && contactStorage.length > 0) {
    for (const elem of contactStorage) {
        let contact = contactTemplate.cloneNode(true);

        contact.querySelector(".contact-name").innerHTML = elem.name + " " + elem.surname;
        contact.querySelector(".contact-phone").innerHTML = elem.phone;
        contact.querySelector(".contact-job").innerHTML += elem.job || "";
        contact.querySelector(".contact-age").innerHTML += elem.age || "";
        contact.querySelector(".contact-mail").innerHTML += elem.mail;
        contact.querySelector(".contact-birsday").innerHTML += elem.birsday || "";
        contact.querySelector(".contact-item").style.backgroundColor = elem.color;

        //Кнопка удалить
        contact.querySelector("#remove-contact").onclick = function () {
            let phoneNum = this.parentElement.querySelector(".contact-phone").innerHTML;
            let currentContacts = JSON.parse(localStorage.getItem("contacts"));
            for (let i = 0; i < currentContacts.length; i++) {
                if (currentContacts[i].phone === phoneNum) {
                    currentContacts.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("contacts", JSON.stringify(currentContacts));
            this.parentElement.remove();
        }

        contactsBox.appendChild(contact);
    }
}

saveContactBtn.onclick = function (e) {
    e.preventDefault();
    if (nameField.value && phoneField.value && mailField.value) {
        let currentContacts = JSON.parse(localStorage.getItem("contacts"));

        let contact = contactTemplate.cloneNode(true);

        /*for (const contact of currentContacts) {
            if (contact.phone === phoneField.value) {

            }
        }*/

        let name = nameField.value;
        let surname = surnameField.value || "";
        contact.querySelector(".contact-name").innerHTML = name + " " + surname;

        contact.querySelector(".contact-phone").innerHTML = phoneField.value;

        contact.querySelector(".contact-job").innerHTML += jobField.value || "";

        contact.querySelector(".contact-age").innerHTML += ageField.value || "";

        contact.querySelector(".contact-mail").innerHTML += mailField.value;

        let birsdayMonth = birthdayField.value.slice(5, 7);
        let birsdayDay = birthdayField.value.slice(8, 10);

        let birsdayDate =  `${birsdayDay} - ${birsdayMonth}`;

        contact.querySelector(".contact-birsday").innerHTML += birsdayDate || "";

        contact.querySelector(".contact-item").style.backgroundColor = colorField.value;

        //Кнопка удалить
        contact.querySelector("#remove-contact").onclick = function () {
            let phoneNum = this.parentElement.querySelector(".contact-phone").innerHTML;
            let currentContacts = JSON.parse(localStorage.getItem("contacts"));
            for (let i = 0; i < currentContacts.length; i++) {
                if (currentContacts[i].phone === phoneNum) {
                    currentContacts.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("contacts", JSON.stringify(currentContacts));
            this.parentElement.remove();
        }
        //Делаем обьект localStorage
        let newContactObj = {
            name: nameField.value,
            surname: surnameField.value,
            phone: phoneField.value,
            job: jobField.value,
            age: ageField.value,
            mail: mailField.value,
            birsday: birsdayDate,
            color: colorField.value
        };
        currentContacts.push(newContactObj);
        localStorage.setItem("contacts", JSON.stringify(currentContacts));

        contactsBox.appendChild(contact);

        document.forms.contactForm.reset();

        contactForm.classList.remove("active");
    }

}