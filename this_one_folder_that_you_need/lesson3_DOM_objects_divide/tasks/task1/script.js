// 1
let cat = {
    paws: 4,
    mustach: "long",
    fleas: "false"
};
let neighbour = {
    IQ: "65",
    drillWall: "enabled",
    when: "6 a.m."
};
let sobaken = {
    voice: "gaf-gaf",
    veapoon: "кусь за ногу",
    furColor: "black"
};
let pen = {
    color: "blue",
    material: "plastic",
    owner: "Школьник Петя"
};
let laptop = {
    designer: "ASUS",
    manufacturer: "Заводик в Китаe",
    usbPorts: 3
};
// 2
let vegetable = {
    name: "Vitalik",
    skils: ["makeCode","sleep", "eat"],
    IDE: {
        name: "SublimeText",
        version: 3,
        why: "because my laptop is slow =("
    }
};
let alkash = {
    name: "Дядя Витя",
    things: ["bottle", "cigarette", "glass"],
    sobutilnik: {
        name: "Дядя Жора",
        age: 35
    }
};
let pillow = {
    filling: "Puh",
    count: 3,
    properties: ["soft", "big"],
    pillowcase: {
        material: "llenn",
        pattern: "colored"
    }
};
let car = {
    model: "Reno",
    series: 45,
    VIN: "34JH7DMS098234",
    interior: ["seats", "wheels", "trunk"],
    engine: {
        series: 545753123,
        isNew: false
    }
};
let body = {
    height: 185,
    weight: 78,
    parts: ["head", "hands", "foots", "bolls"],
    healthStatus: {
        head: "Ok",
        rightHand: "neOk",
        leftFoot: "mogeButy"
    }
};
// 3
/*for (let key in cat) {
	console.log(key);
}
for (let key in neighbour) {
	console.log(key);
}
for (let key in sobaken) {
	console.log(key);
}
for (let key in pen) {
	console.log(key);
}
for (let key in laptop) {
	console.log(key);
}*/

/*for (let key in vegetable) {
	console.log(key);
	if (typeof(vegetable[key]) === "object") {
		for (let key2 in vegetable[key]) {
			console.log(` - ${key2}`)
		}
	}
}
for (let key in alkash) {
	console.log(key);
	if (typeof(alkash[key]) === "object") {
		for (let key2 in alkash[key]) {
			console.log(` - ${key2}`)
		}
	}
}
for (let key in pillow) {
	console.log(key);
	if (typeof(pillow[key]) === "object") {
		for (let key2 in pillow[key]) {
			console.log(` - ${key2}`)
		}
	}
}
for (let key in car) {
	console.log(key);
	if (typeof(car[key]) === "object") {
		for (let key2 in car[key]) {
			console.log(` - ${key2}`)
		}
	}
}
for (let key in body) {
	console.log(key);
	if (typeof(body[key]) === "object") {
		for (let key2 in body[key]) {
			console.log(` - ${key2}`)
		}
	}
}*/
// 4
/*console.log(Object.keys(cat));
console.log(Object.keys(neighbour));
console.log(Object.keys(sobaken));
console.log(Object.keys(pen));
console.log(Object.keys(laptop));
console.log(Object.keys(vegetable));
console.log(Object.keys(alkash));
console.log(Object.keys(pillow));
console.log(Object.keys(car));
console.log(Object.keys(body));*/
// 5
let cars = [
    {
        model: "Ford", year: 2014, power: 567, color: "red"
    },{
        model: "Volvo", year: 2015, power: 234, color: "violet"
    },{
        model: "Mustang", year: 2018, power: 473, color: "green"
    },{
        model: "Moscvich", year: 1986, power: 34, color: "orange"
    },{
        model: "Pegueot", year: 2017, power: 567, color: "white"
    },{
        model: "Daweo", year: 2016, power: 567, color: "red"
    },{
        model: "Traktor", year: 2003, power: 5334, color: "#44c934"
    },{
        model: "Ford", year: 2014, power: 567, color: "blue"
    },{
        model: "Mercedes", year: 2018, power: 756, color: "#f6c234"
    },{
        model: "Volkswagen", year: 2013, power: 567, color: "#34d5c9"
    }
];
// 7
let cars2 = [
    {
        model: "Ford", year: 2014, power: 567, color: "red",
        driver: {
            name: "Vasya",
            age:  23,
            gender: "male"
        }
    },{
        model: "Volvo", year: 2015, power: 234, color: "violet",
        driver: {
            name: "Anna",
            age:  34,
            gender: "female"
        }
    },{
        model: "Mustang", year: 2018, power: 473, color: "green",
        driver: {
            name: "ernesto",
            age:  28,
            gender: "it"
        }
    },{
        model: "Moscvich", year: 1986, power: 34, color: "orange",
        driver: {
            name: "sanya",
            age:  67,
            gender: "male"
        }
    },{
        model: "Pegueot", year: 2017, power: 567, color: "white",
        driver: {
            name: "kolya",
            age:  34,
            gender: "male"
        }
    },{
        model: "Daweo", year: 2016, power: 567, color: "red",
        driver: {
            name: "sofia",
            age:  43,
            gender: "female"
        }
    },{
        model: "Traktor", year: 2003, power: 5334, color: "#44c934",
        driver: {
            name: "igor",
            age:  34,
            gender: "female"
        }
    },{
        model: "Ford", year: 2014, power: 567, color: "blue",
        driver: {
            name: "illa",
            age: 24 ,
            gender: "male"
        }
    },{
        model: "Mercedes", year: 2018, power: 756, color: "#f6c234",
        driver: {
            name: "ivan",
            age:  23,
            gender: "male"
        }
    },{
        model: "Volkswagen", year: 2013, power: 567, color: "#34d5c9",
        driver: {
            name: "ira",
            age:  19,
            gender: "female"
        }
    }
];
// 8
/*let i = 0;
while(i < cars.length) {
	console.log(cars[i]);
	i++;
}
i = 0;
while(i < cars2.length) {
	console.log(cars2[i]);
	i++;
}*/
// 9
/*for (var i = 0; i < cars.length; i++) {
	console.log(cars[i]);
}
for (var i = 0; i < cars2.length; i++) {
	console.log(cars2[i]);
}*/
// 10
/*for (let car of cars) {
	console.log(car);
}
for (let car of cars2) {
	console.log(car);
}*/
// 11
// let cat = {
// 	paws: 4,
// 	mustach: "long",
// 	fleas: "false"
// };
// let neighbour = {
// 	IQ: "65",
// 	drillWall: "enabled",
// 	when: "6 a.m."
// };
// let sobaken = {
// 	voice: "gaf-gaf",
// 	veapoon: "кусь за ногу",
// 	furColor: "black"
// };
// let pen = {
// 	color: "blue",
// 	material: "plastic",
// 	owner: "Школьник Петя"
// };
// let laptop = {
// 	designer: "ASUS",
// 	manufacturer: "Заводик в Китаe",
// 	usbPorts: 3
// };
// 12
let catString = JSON.stringify(cat);
let neighbourString = JSON.stringify(neighbour);
let sobakenString = JSON.stringify(sobaken);
let penString = JSON.stringify(pen);
let laptopString = JSON.stringify(laptop);
// 13
let catParse = JSON.parse(catString);
let neighbourParse = JSON.parse(neighbourString);
let sobakenParse = JSON.parse(sobakenString);
let penParse = JSON.parse(penString);
let laptopParse = JSON.parse(laptopString);
// 14
/*for(let car of cars) {
	car = JSON.stringify(car);
	console.log(car);
}*/
// 16
/*
let stringifyCars = [];
for(let car of cars2) {
	stringifyCars.push(JSON.stringify(car));
}
console.log(stringifyCars);*/
// 17
let users = [
    {name: "Vasya", skills: ["pro", "develop", "css", "html"]},
    {name: "Petya", skills: ["pyton", "php", "web"]},
    {name: "Kolya", skills: ["pinat hui", "lay on the sofa", "eat and sleep"]},
    {name: "Ira", skills: ["mechanic skils", "maitance"]},
    {name: "Katya", skills: ["whore", "bad girl", "big hole"]},
    {name: "Vitalik", skills: ["pararam", "parapam"]},
];

/*for(const user of users) {
	console.log(user.name);
	for(const skill of user.skills) {
		console.log(` - ${skill}`);
	}
}*/
// 18
/*let onlySkills = [];
for (let user of users) {
	console.log(user);
	onlySkills.push(user.skills);
}
console.log(onlySkills);*/
// 19
/*
let users2 = [
	{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
	{name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
	{name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
	{name: 'olya', age: 28, status: false, skills: ['java', 'js']},
	{name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
];

for(const user of users2) {
	for(const key in user) {
		console.log(key);
		if (Array.isArray(user[key])) {
			for (let el of user[key]) console.log(` - ${el}`);
		} else console.log(` - ${user[key]}`);
	}
}*/
// 20

let users3 = [			{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
/*
let addresses = [];
for(const user of users3) {
	addresses.push(user.address)
}
console.log(addresses);*/
// 21
/*for (let user of users3) {
	let block = document.createElement("div");
	block.innerText = `${user.name} ${user.age} ${user.status} \n`;
	for (let key in user.address) {
		block.innerText += user.address[key] + " ";
	}
	document.body.appendChild(block);
}*/
// 22
/*
for (let user of users3) {
	let mainBlock = document.createElement("div");
	for(let key in user) {
		let block = document.createElement("div");
		if (typeof(user[key]) == "object") {
			for (let key2 in user[key])	{
				block.innerText += user[key][key2];
			}
		} else block.innerText = user[key];
		block.style.padding = "10px";
		mainBlock.appendChild(block);
	}
	mainBlock.style.marginBottom = "20px";
	mainBlock.style.backgroundColor = "green";
	document.body.appendChild(mainBlock);
}*/
// 23
// Карточка из юзера, для адреса отдельный блок
/*for (let user of users3) {
	let mainBlock = document.createElement("div");
	for(let key in user) {
		let block = document.createElement("div");
		if (typeof(user[key]) == "object") {
			for (let key2 in user[key])	{
				let addressBlock = document.createElement("div");
				addressBlock.innerText = user[key][key2];
				addressBlock.style.backgroundColor = "red";
				block.appendChild(addressBlock);
			}
		} else block.innerText = user[key];
		block.style.padding = "10px";
		mainBlock.appendChild(block);
	}
	mainBlock.style.marginBottom = "20px";
	mainBlock.style.backgroundColor = "green";
	document.body.appendChild(mainBlock);
}*/

// 24
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},];
let usersWithAddresses = [];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},];

/*for (let user of usersWithId) {
	let currentId = user.id;
	for (const city of citiesWithId) {
		if (city.user_id === currentId) {
			user.address = city;
		}
	}
}*/
// console.log(usersWithId);

// 25
/*for (const user of usersWithId) {
	let obj = {};
	for (const key in user) {
		obj[key] = user[key];
	}
	usersWithAddresses.push(obj);
}*/
/*
for (let obj of usersWithId) {
	delete obj.address;
}
console.log(usersWithAddresses);
console.log(usersWithId);*/


// 2 частина
/*
for (const user of usersWithId) {
	for (const city of citiesWithId) {
		if (user.id === city.user_id) {
			user.address = city;
			// usersWithAddresses.push(user);
		}
	}
}
usersWithAddresses = usersWithId.slice(0);

for (const obj of usersWithAddresses) {
	obj.address = 32;
}
console.log(usersWithId);*/

/*let elementId = document.getElementById("myId");
let elementClass = document.querySelector(".myClass");
let textId = elementId.innerText;
let textClass = elementClass.innerText;

document.getElementById("myId").innerText = "Тут ще раз текст, бла бла бла";
document.querySelector(".myClass").innerHTML  = "Тут ще раз текст, бла бла бла";
elementId.style.width = "100px";
elementId.style.height = "40px";
elementClass.style.width = "100px";
elementClass.style.height = "40px";*/

let table = document.createElement("table");
/*let tr = document.createElement("tr");
let td = document.createElement("td");
td.style.border = "1px solid #000";
td.style.padding = "20px";
tr.appendChild(td.cloneNode(true));
tr.appendChild(td.cloneNode(true));
tr.appendChild(td.cloneNode(true));
table.appendChild(tr);
document.body.appendChild(table);*/
/*let td = document.createElement("td");
td.style.border = "1px solid red";
td.style.padding = "20px";
for (let i = 0; i < 10; i++) {
	let tr = document.createElement("tr")
	tr.appendChild(td.cloneNode(true));
	tr.appendChild(td.cloneNode(true));
	tr.appendChild(td.cloneNode(true));
	table.appendChild(tr);
}
document.body.appendChild(table);*/

/*for (let i = 0; i < 10; i++) {
	let tr = document.createElement("tr")
	for (let j = 0; j < 5; j++) {
		let td = document.createElement("td");
		td.style.border = "1px solid #000";
		td.style.padding = "20px";
		tr.appendChild(td);
	}
	table.appendChild(tr);
}
document.body.appendChild(table);*/

/*
let row = +prompt("Число рядків");
let col = +prompt("Число стовпчиків");

for (let i = 0; i < row; i++) {
	let tr = document.createElement("tr")
	for (let j = 0; j < col; j++) {
		let td = document.createElement("td");
		td.style.border = "1px solid #000";
		td.style.padding = "20px";
		tr.appendChild(td);
	}
	table.appendChild(tr);
}
document.body.appendChild(table);*/

// 3 частина
/*
let elWithId = document.querySelectorAll("[id]");
let allP = document.querySelectorAll("p");
for (const p of allP) {
	p.innerText = "hello oktenweb!";
}
let dives = document.getElementsByTagName("div");
for (const div of dives) {
	div.style.backgroundColor = "red";
}*/

// Class
// 1
/*
let sectionHeaders = document.querySelectorAll(".rules h2");
let contentBox = document.getElementById("content");
let list = document.createElement("ul");
for (let i = 0; i < sectionHeaders.length; i++) {
	let listItem = document.createElement("li");
	listItem.style.padding = "10px";
	listItem.style.listStyle = "none";
	listItem.innerText = i + ". " + sectionHeaders[i].innerHTML;
	list.appendChild(listItem);
}
contentBox.appendChild(list);*/

// 2
/*let wrap = document.getElementById("wrap");
let rulesList = ["Первое правило", "Третье правило", "Четвертое правило", "Пятое правило", "Шестое правило"];
for (let i = 0; i < rulesList.length; i++) {
	let rule = document.createElement("div");
	let header = document.createElement("h2");
	header.innerText = i;
	let text = document.createElement("div");
	text.innerText = rulesList[i];
	rule.appendChild(header);
	rule.appendChild(text);
	wrap.appendChild(rule);
}*/

// *************************************
// 1
/*fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => {
		let wrap = document.getElementById("wrap");
		for (const user of users) {
			let userContainer = document.createElement("div");
			userContainer.style.padding = "20px";
			userContainer.style.textAlign = "center";
			userContainer.style.display = "inline-block";

			let name = document.createElement("div");
			name.innerHTML = user.name + `  <sup>${user.username}</sup>`;
			userContainer.appendChild(name);

			let email = document.createElement("div");
			userContainer.appendChild(email);

			let address = document.createElement("address");
			address.style.padding = "10px";
			for (const key in user.address) {
				if (key == "geo") {
					let div = document.createElement("div");
					div.innerText = "Geolocation:";
					address.appendChild(div);
					div.innerText = `lat: ${Object.values(user.address[key])[0]},  lng: ${Object.values(user.address[key])[1]}`;
					address.appendChild(div);
					continue;
				}
				let div = document.createElement("div");
				div.innerText = user.address[key];
				address.appendChild(div);
			}
			userContainer.appendChild(address);

			let phone = document.createElement("div");
			phone.innerText = user.phone;
			userContainer.appendChild(phone);

			let site = document.createElement("div");
			site.innerText = user.website;
			userContainer.appendChild(site);

			let company = document.createElement("div");
			company.innerText = "Company:";
			company.style.marginTop = "10px";
			for (const key in user.company) {
				let div = document.createElement("div");
				div.innerText = user.company[key];
				company.appendChild(div);
			}
			userContainer.appendChild(company);

			wrap.appendChild(userContainer);
		}

	})*/

// 2
/*fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(posts => {
		let wrap = document.getElementById("wrap");
		for (const post of posts) {
			let postContainer = document.createElement("div");
			postContainer.style.border = "2px solid #555";
			postContainer.style.borderRadius = "10px";
			postContainer.style.width = "50%";
			postContainer.style.marginBottom = "20px";

			let postTitle = document.createElement("h2");
			postTitle.innerText = post.title;
			postTitle.style.padding = "10px";
			postTitle.style.backgroundColor = "#c44";
			postContainer.appendChild(postTitle);
			postTitle.style.margin = "0";

			let postText = document.createElement("div");
			postText.innerText = post.body;
			postText.style.padding = "10px";
			postText.style.backgroundColor = "#a77";
			postContainer.appendChild(postText);

			wrap.appendChild(postContainer);
		}
	})*/
/*fetch('https://jsonplaceholder.typicode.com/comments')
	.then(response => response.json())
	.then(posts => {
		let wrap = document.getElementById("wrap");
		let comment = document.getElementById("comment").content;
		for (const post of posts) {
			comment.querySelector(".com-name").innerHTML = post.name;
			comment.querySelector(".com-email").innerText = post.email;
			comment.querySelector(".com-body").innerHTML = post.body;
			wrap.appendChild(comment.cloneNode(true));
		}
	})*/

// Я не смог решить последнюю задачу:(
/*fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(posts => {
		fetch('https://jsonplaceholder.typicode.com/comments')
			.then(response => response.json())
			.then(comments => {
				/!*console.log(posts);
				console.log(comments);*!/
				let wrap = document.getElementById("wrap");
				let postBox = document.getElementById("comPost").content;
				// let commentBox = document.getElementById("comment").content;
				let commentZone = postBox.querySelector(".comments");
				for (let post of posts) {
					postBox.querySelector(".post-title").innerHTML = post.title;
					postBox.querySelector(".post-text").innerHTML = post.body;

					let commentBox = document.createElement("div");

					for (let comment of comments) {
						if (comment.postId === post.id) {
							let name = document.createElement("div");
							name.innerHTML = comment.name;
							name.classList.add("com-name");
							commentBox.appendChild(name);

							let email = document.createElement("div");
							email.innerHTML = comment.email;
							email.classList.add("com-email");
							commentBox.appendChild(email);

							let body = document.createElement("div");
							body.innerHTML = comment.body;
							body.classList.add("com-body");
							commentBox.appendChild(body);

							postBox.appendChild(commentBox);
							/!*commentBox.querySelector(".com-name").innerHTML = comment.name;
							commentBox.querySelector(".com-email").innerHTML = comment.email;
							commentBox.querySelector(".com-body").innerHTML = comment.body;
							// postBox.querySelector(".post-container").appendChild(commentBox.cloneNode(true));
							commentZone.appendChild(commentBox.cloneNode(true));*!/
						}
					}

					wrap.appendChild(postBox.cloneNode(true));
				}
			})
	})*/

/*
id: 1
name: "Leanne Graham"
username: "Bret"
email: "Sincere@april.biz"
address:
	street: "Kulas Light"
suite: "Apt. 556"
city: "Gwenborough"
zipcode: "92998-3874"
geo:
	lat: "-37.3159"
lng: "81.1496"
__proto__: Object
__proto__: Object
phone: "1-770-736-8031 x56442"
website: "hildegard.org"
company:
	name: "Romaguera-Crona"
catchPhrase: "Multi-layered client-server neural-net"
bs: "harness real-time e-markets"*/
