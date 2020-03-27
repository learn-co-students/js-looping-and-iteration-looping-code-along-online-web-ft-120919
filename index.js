function writeCards(names, eventName) {
  let results = [];
  for(let i = 0; i < names.length; i++) {
    results.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return results;
};

function countDown(num_arg) {
  let count = num_arg;
  while(count >= 0) {
    console.log(count);
    count --;
  }  
}