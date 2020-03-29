function writeCards(names, typeOfGift) {
  let gratitudes = []
  for (let i = 0; i <names.length ; i++) {
        //console.log(`Thank you, ${names[i]}, for the wonderful ${typeOfGift} gift!`);
        gratitudes.push(`Thank you, ${names[i]}, for the wonderful ${typeOfGift} gift!`);

  }
 return gratitudes;
}

function countDown(count) {
  for (let i = count; i >= 0; i--) {
    console.log(i);
  }
}

