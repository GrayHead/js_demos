let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

let user = {
    id: 1,
    name: 'vasya',
    surname: 'pupkin',
    email: 'asd@asd.com',
    age: 31,
    gender: 'MALE',
    skills: [{title: 'java', exp: 10}, {title: 'js', exp: 10}, {title: 'c++', exp: 10}],
    car: {model: 'toyota', year: 2021, power: 250}
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let locations = [
    {
        "title": "м. Київ",
        "type": "city"
    },
    {
        "title": "Житомирська область",
        "type": "oblast"
    },
    {
        "title": "Харківська область",
        "type": "oblast"
    },
    {
        "title": "Вінницька область",
        "type": "oblast"
    },
    {
        "title": "Чернігівська область",
        "type": "oblast"
    },
    {
        "title": "Дніпропетровська область",
        "type": "oblast"
    },
    {
        "title": "Черкаська область",
        "type": "oblast"
    },
    {
        "title": "Волинська область",
        "type": "oblast"
    },
    {
        "title": "Київська область",
        "type": "oblast"
    },
    {
        "title": "Миколаївська область",
        "type": "oblast"
    },
    {
        "title": "Рівненська область",
        "type": "oblast"
    },
    {
        "title": "Сумська область",
        "type": "oblast"
    },
    {
        "title": "Тернопільська область",
        "type": "oblast"
    },
    {
        "title": "Краматорський район",
        "type": "raion"
    },
    {
        "title": "Кіровоградська область",
        "type": "oblast"
    },
    {
        "title": "Хмельницька область",
        "type": "oblast"
    },
    {
        "title": "Запорізька область",
        "type": "oblast"
    },
    {
        "title": "Одеська область",
        "type": "oblast"
    },
    {
        "title": "Полтавська область",
        "type": "oblast"
    },
    {
        "title": "Львівська область",
        "type": "oblast"
    },
    {
        "title": "м. Кривий Ріг",
        "type": "city"
    },
    {
        "title": "Криворізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Івано-Франківська область",
        "type": "oblast"
    },
    {
        "title": "Чернівецька область",
        "type": "oblast"
    },
    {
        "title": "Ізюмський район",
        "type": "raion"
    },
    {
        "title": "Бахмутська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Васильків",
        "type": "city"
    },
    {
        "title": "Васильківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білоцерківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Біла Церква",
        "type": "city"
    },
    {
        "title": "Донецька область",
        "type": "oblast"
    },
    {
        "title": "Покровський район",
        "type": "raion"
    },
    {
        "title": "Уманська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Бахмутський район",
        "type": "raion"
    },
    {
        "title": "Закарпатська область",
        "type": "oblast"
    },
    {
        "title": "Лубенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Лубни",
        "type": "city"
    },
    {
        "title": "Полтавська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Полтава",
        "type": "city"
    },
    {
        "title": "м. Старокостянтинів",
        "type": "city"
    },
    {
        "title": "Старокостянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миколаїв",
        "type": "city"
    },
    {
        "title": "Миколаївська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Торецька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кропивницький район",
        "type": "raion"
    },
    {
        "title": "Першотравенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Нікопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Нікополь",
        "type": "city"
    },
    {
        "title": "м. Першотравенськ",
        "type": "city"
    },
    {
        "title": "Одеський район",
        "type": "raion"
    },
    {
        "title": "м. Черкаси",
        "type": "city"
    },
    {
        "title": "Черкаська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Добропільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Херсонська область",
        "type": "oblast"
    },
    {
        "title": "Сумська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Суми",
        "type": "city"
    },
    {
        "title": "Первомайська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Краматорська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Макарівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Краматорськ",
        "type": "city"
    },
    {
        "title": "Миргородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бориспіль",
        "type": "city"
    },
    {
        "title": "Броварська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Миргород",
        "type": "city"
    },
    {
        "title": "Бориспільська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Бровари",
        "type": "city"
    },
    {
        "title": "м. Вознесенськ",
        "type": "city"
    },
    {
        "title": "Коростенський район",
        "type": "raion"
    },
    {
        "title": "м. Первомайськ",
        "type": "city"
    },
    {
        "title": "Миронівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенський район",
        "type": "raion"
    },
    {
        "title": "Синельниківський район",
        "type": "raion"
    },
    {
        "title": "Фастівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вознесенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Житомирський район",
        "type": "raion"
    },
    {
        "title": "Дружківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Фастів",
        "type": "city"
    },
    {
        "title": "Слов'янська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Запорізький район",
        "type": "raion"
    },
    {
        "title": "м. Слов'янськ",
        "type": "city"
    },
    {
        "title": "м. Кременчук",
        "type": "city"
    },
    {
        "title": "Ніжинський район",
        "type": "raion"
    },
    {
        "title": "м. Ватутіне",
        "type": "city"
    },
    {
        "title": "Ватутінська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Кременчуцька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Пологівський район",
        "type": "raion"
    },
    {
        "title": "Дніпровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Дніпро",
        "type": "city"
    },
    {
        "title": "Лозівський район",
        "type": "raion"
    },
    {
        "title": "Покровська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Обухів",
        "type": "city"
    },
    {
        "title": "Узинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шепетівський район",
        "type": "raion"
    },
    {
        "title": "Пирятинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сумський район",
        "type": "raion"
    },
    {
        "title": "Харківський район",
        "type": "raion"
    },
    {
        "title": "Жашківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Пирятин",
        "type": "city"
    },
    {
        "title": "Павлоградський район",
        "type": "raion"
    },
    {
        "title": "Голованівський район",
        "type": "raion"
    },
    {
        "title": "Обухівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Подільський район",
        "type": "raion"
    },
    {
        "title": "м. Охтирка",
        "type": "city"
    },
    {
        "title": "Мар'їнська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Мелітополь",
        "type": "city"
    },
    {
        "title": "Куп’янський район",
        "type": "raion"
    },
    {
        "title": "Святогірська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Рівне",
        "type": "city"
    },
    {
        "title": "Бородянська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Роздільнянський район",
        "type": "raion"
    },
    {
        "title": "Запорізька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Шосткинська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Болградський район",
        "type": "raion"
    },
    {
        "title": "Прилуцький район",
        "type": "raion"
    },
    {
        "title": "Олешківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Березівський район",
        "type": "raion"
    },
    {
        "title": "Очаківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Смілянська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Очаків",
        "type": "city"
    },
    {
        "title": "Рівненська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Первомайський район",
        "type": "raion"
    },
    {
        "title": "Ізмаїльський район",
        "type": "raion"
    },
    {
        "title": "Сквирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Шостка",
        "type": "city"
    },
    {
        "title": "Мелітопольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Маріупольський район",
        "type": "raion"
    },
    {
        "title": "Охтирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Білгород-Дністровський район",
        "type": "raion"
    },
    {
        "title": "м. Запоріжжя",
        "type": "city"
    },
    {
        "title": "м. Коростень",
        "type": "city"
    },
    {
        "title": "Луганська область",
        "type": "oblast"
    },
    {
        "title": "м. Житомир",
        "type": "city"
    },
    {
        "title": "Курахівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Черкаський район",
        "type": "raion"
    },
    {
        "title": "Новоград-Волинський район",
        "type": "raion"
    },
    {
        "title": "Костянтинівська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Переяславська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Новоукраїнський район",
        "type": "raion"
    },
    {
        "title": "Уманський район",
        "type": "raion"
    },
    {
        "title": "Коростенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Переяслав",
        "type": "city"
    },
    {
        "title": "Шосткинський район",
        "type": "raion"
    },
    {
        "title": "Великоновосілківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Чернігівський район",
        "type": "raion"
    },
    {
        "title": "Радомишльська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вугледарська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Звенигородський район",
        "type": "raion"
    },
    {
        "title": "м. Конотоп",
        "type": "city"
    },
    {
        "title": "Вишгородська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Гребінківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сарненський район",
        "type": "raion"
    },
    {
        "title": "Бердянський район",
        "type": "raion"
    },
    {
        "title": "Миколаївський район",
        "type": "raion"
    },
    {
        "title": "Гостомелська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Дубровицька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Українська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Сарненська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Воскресенська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Маріуполь",
        "type": "city"
    },
    {
        "title": "Чугуївський район",
        "type": "raion"
    },
    {
        "title": "Охтирський район",
        "type": "raion"
    },
    {
        "title": "Житомирська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "м. Сарни",
        "type": "city"
    },
    {
        "title": "Широківська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Славутицька територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Золотоніський район",
        "type": "raion"
    },
    {
        "title": "Конотопська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Волноваський район",
        "type": "raion"
    },
    {
        "title": "Донецький район",
        "type": "raion"
    },
    {
        "title": "Маріупольська територіальна громада",
        "type": "hromada"
    },
    {
        "title": "Вараський район",
        "type": "raion"
    },
    {
        "title": "м. Славутич",
        "type": "city"
    }
];

fetch("https://alerts.in.ua/assets/map.svg", {
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
});

fetch("https://alerts.in.ua/assets/locations.json", {
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
});
