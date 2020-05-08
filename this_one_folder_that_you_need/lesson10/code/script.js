/*function Card(id) {
    this.key = id || 0;
    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];

    this.putCredits = function (money) {
        this.balance += money;
        console.log(`Вы пополнили счет на ${money}$`);
        this.changeHistory("Поподнение счета", `+${money}$`);
    }

    this.takeCredits = function (cash) {
        if (cash > this.balance) {
            console.log("Недостаточно средств на щету");
            return;
        } else if (cash > this.transactionLimit) {
            console.log("Вы превысили лимит по карте");
            return;
        }
        this.balance -= cash;
        console.log(`Вы сняли со счета ${cash}$`);
        this.changeHistory("Снятие со счета", `-${cash}$`);
    }

    this.setTransactionLimit = function (newLimit) {
        this.transactionLimit = newLimit;
        console.log(`Установлен новый лимит по снятию - ${newLimit}$ за одну операцию`);
        this.changeHistory("Изменение лимита транзакций", newLimit);
    }

    this.transferCredits = function (money, anotherCard) {
        if (money * 1.005 > this.balance) {
            console.log("Недостаточно средств на щету");
            return;
        } else if (money > this.transactionLimit) {
            console.log("Вы превысили лимит по карте");
            return;
        }
        this.balance -= (money * 1.005).toFixed(2);
        anotherCard.balance += money;
        console.log(`Вы перевели ${money}$ на карту с id${anotherCard.key}`);
        console.log(`Ваш баланс теперь ${this.balance}$`);
        this.changeHistory(`Перевод денежных средств id${anotherCard.key}`, "-" + (money * 1.05).toFixed(2));
    }

    this.showHistory = function () {
        console.log(`Карта id${this.key}, история транзакций`);
        console.log(this.historyLogs);
    }

    this.changeHistory = function (actionName, actionMoney) {
        let historyObj = {
            operationType: actionName,
            credits: actionMoney,
            operationTime: Date(),
        }
        this.historyLogs.push(historyObj);
    }

    this.getCardOptions = function () {
        document.write("key: " + this.key + "<br>");
        document.write("balance: " + this.balance + "<br>");
        document.write("transactionLimit: " + this.transactionLimit + "<br>");
    }
}*/

/*let card1 = new Card(1);
let card2 = new Card(2);
let card3 = new Card(3);*/

/*deepWrite(card1);
deepWrite(card2);
deepWrite(card3);*/

/*function deepWrite(card) {
    document.write("key: " + card.key + "<br>");
    document.write("balance: " + card.balance + "<br>");
    document.write("transactionLimit: " + card.transactionLimit + "<br>");
}*/

// Version 2
let box = document.getElementById("box");

function userCard(id) {
    let key = id || 0;
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];

    function putCredits(money) {
        balance += money;
        console.log(`Вы пополнили счет на ${money}$`);
        changeHistory("Поподнение счета", `+${money}$`);
    }

    function takeCredits(cash) {
        if (cash > balance) {
            console.log("Недостаточно средств на щету");
            return;
        } else if (cash > transactionLimit) {
            console.log("Вы превысили лимит по карте");
            return;
        }
        balance -= cash;
        console.log(`Вы сняли со счета ${cash}$`);
        changeHistory("Снятие со счета", `-${cash}$`);
    }

    function setTransactionLimit(newLimit) {
        transactionLimit = newLimit;
        console.log(`Установлен новый лимит по снятию - ${newLimit}$ за одну операцию`);
        changeHistory("Изменение лимита транзакций", `${newLimit}$`);
    }

    function transferCredits(money, anotherCard) {
        if (money * 1.005 > balance) {
            console.log("Недостаточно средств на щету");
            return;
        } else if (money > transactionLimit) {
            console.log("Вы превысили лимит по карте");
            return;
        }
        balance -= (money * 1.005);
        balance = Math.round(balance * 100).toFixed() / 100;
        anotherCard.putCredits(money);
        console.log(`Вы перевели ${money}$ на карту с id${anotherCard.getCardOptions().key}`);
        console.log(`Ваш баланс теперь ${balance}$`);
        changeHistory(`Перевод денежных средств id${anotherCard.getCardOptions().key}`, "-" + (money * 1.005).toFixed(2));
    }

    function showHistory() {
        console.log(`Карта id${key}, история транзакций`);
        console.log(historyLogs);
    }

    function changeHistory(actionName, actionMoney) {
        let historyObj = {
            operationType: actionName,
            credits: actionMoney,
            operationTime: Date(),
        }
        historyLogs.push(historyObj);
    }

    function getCardOptions() {
        /*box.innerHTML = "";
        box.innerHTML += ("key: " + key + "<br>");
        box.innerHTML += ("balance: " + balance + "<br>");
        box.innerHTML += ("transactionLimit: " + transactionLimit + "<br>");*/
        return {
            key: key,
            balance: balance,
            transactionLimit: transactionLimit,
        }
    }

    return {putCredits, takeCredits, setTransactionLimit, transferCredits, showHistory, getCardOptions}
}

/*let card1 = userCard(1);
let card2 = userCard(2);*/

class userAccount {
    constructor(name) {
        this.name = name;
        this.userCards = [];
    }

    addCard(newCard) {
        if (this.userCards.length >= 3) {
            console.log("Вы не можете иметь больше 3 карт!");
            return;
        }
        if (this.userCards.length) {
            for (const card of this.userCards) {
                if (newCard.getCardOptions().key === card.getCardOptions().key) {
                    console.log("У вас уже есть карта с таким ID!");
                    return;
                }
            }
        }
        this.userCards.push(newCard);
    }

    getCardByKey (n) {
        if (this.userCards.length) {
            for (const card of this.userCards) {
                if (card.getCardOptions().key === n) {
                    return card;
                }
            }
        } else {
            console.log("Сначала оформьте карту!");
            return;
        }
        console.log("Карточка не найдена!");
    }

    removeCardByKey(n) {
        if (this.userCards.length) {
            for (let i = 0; i < this.userCards.length; i++) {
                if (this.userCards[i].getCardOptions().key === n) {
                    let password = prompt("Введите пароль");
                    if (password === "0000") {
                        this.userCards.splice(i, 1);
                        console.log("Карта удалена!");
                        return;
                    } else {
                        console.log("Нерпавильный пароль!");
                        return;
                    }
                    return;
                }
            }
            console.log("Карточка под таким ID не найдена!");
        } else {
            console.log("Сначала оформьте карту!");
        }
    }
}

let user = new userAccount("Виталик");

