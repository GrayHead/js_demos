

/*if switch*/

// let someBoolValue: boolean = confirm('????');
//
// if (someBoolValue) {
//     console.log('this');
// } else {
//     console.log('that');
// }


let promptAnswer = prompt('????');
console.log(promptAnswer);

if (promptAnswer === 'apple') {
    console.log('apple juice');
} else if (promptAnswer === 'orange') {
    console.log('orange juice')
} else if (promptAnswer === 'carrot') {
    console.log('carrot juice');
} else {
    console.log('?????')
}

switch (promptAnswer) {
    case 'apple':
        console.log('apple juice');
        break;

    case 'orange':
        console.log('orange juice');
        break;
    default:
        console.log('?????');

}


