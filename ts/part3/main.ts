/*arrays*/
let strings: string[] = [
    'html', //0
    'js', // 1
    'git' //2
]
console.log(strings);
console.log(strings.length);
console.log(strings[0]);
console.log(strings[1]);
console.log(strings[2]);

let music: string[][] = [
    ['acdc', 'pink floyd'], //0
    ['eminem', '2pac', 'dido'], // 1
]
console.log(music);

const music1 = music[0];
console.log(music1);


const music2 = music[1];
console.log(music2);
console.log(music2[0]);
const someBand2 = music2[1];
console.log(someBand2);

/*objects*/
interface User {
    id: number;
    name: string;
    skills: string[]
}

const user1 = {id: 1, name: 'John', skills: ['htlm', 'js']};
const user2 = {id: 2, name: 'Jade', skills: ['htlm', 'js', 'git']};

console.log(user1.skills)
console.log(user1.skills[0]);


let users: User[] = [
    user1, // 0
    user2, // 1
];
console.log(users);
console.log(users[0]);
console.log(users[0].skills[0]);












