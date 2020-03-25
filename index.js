// Code your solutions in this file
function writeCards(cards) {
    let ar = []
    for (let i = 0; i < cards.length; i++) {
      ar.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
   
    return ar;
  }
  writeCards(["Ada", "Brendan", "Ali"], "birthday");
  
function countDown(t) {
    let c = 0;
    while (c<t+1) {
        console.log(c++);
    }    
}