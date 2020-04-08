// Code your solutions in this file
function writeCards(arr, str) {
  let cards = []
  for (let i = 0; i < arr.length; i++) {
    cards.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`);
  }
  return cards;
}

function countDown(int) {
  while (int >= 0) {
    console.log(int)
    int--;
  }
}