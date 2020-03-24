// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts){
  for (let i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`)
  }

  return gifts;
}

function writeCards(namesArray, event) {
  let thankYouCards = []
  for (let i = 0; i < namesArray.length; i++) {
    console.log(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}

function wrapGiftsAgain(gifts) {
  let i = 0;
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++;
  }
  return gifts;
}

function countDown(startingNumber) {
  let i = 0;
  while (i < startingNumber.length + 1) {
    console.log(`${startingNumber - i}`);
    i++;
  }
}

function countSolution(startingNumber) {
  while (startingNumber > -1) {
    console.log(startingNumber);
    startingNumber -= 1;
  }
}