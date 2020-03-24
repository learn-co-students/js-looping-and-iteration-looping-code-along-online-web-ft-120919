// Code your solutions in this file

function writeCards(array, eventName) {
    let messages = [];
    for (let i = 0; i < array.length; i++) {
        let message = (`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
        messages.push(message);
    }
  return messages;
}

function countDown(number) {
    while(number >= 0){
        
        console.log(number--);

    }
}