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

