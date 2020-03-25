// Code your solutions in this file

// writeCards()
// ✓ returns an array of thank you messages for each name provided to the function

// const friends = ["Lisa", "Kaitlin", "Jan"]

function writeCards(people, occasion) {
  let cardMessages = []
  for (let i = 0; i < people.length; i++) {
    cardMessages.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`);
  }
  return cardMessages
}

// writeCards(friends, "surprise")

// countDown()
// 1) invokes console.log once for each number, counting down from the number provided to zero
// 2) logs each number when counting down, starting from the number provided

function countDown(number) {
  let count = number
  while (count >= 0) {
    console.log(count--)
  }
}

