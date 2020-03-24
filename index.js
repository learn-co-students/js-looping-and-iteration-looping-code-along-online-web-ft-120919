// Code your solutions in this file
function writeCards(nameArray, giftReason) {
    let giftArray = [];
    
    for (let i = 0; i < nameArray.length; i++) {
        giftArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${giftReason} gift!`);
    }

    return giftArray;
}

function countDown(number) {
    // let i = number;

    while (number >= 0) {
        console.log(number);
        number--;
    }
}