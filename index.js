// Code your solutions in this file
const message = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}


function countDown(number) {
    for (let counter = number + number; counter >= number; counter--) {
        console.log(counter - number);
    }
}