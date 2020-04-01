// Code your solutions in this file
function writeCards(cards, event) {
    let thankYouCards = []
    for (let i = 0; i < cards.length; i++) {
        thankYouCards.push( `Thank you, ${cards[i]}, for the wonderful ${event} gift!` )
    }
return thankYouCards;
}

function countDown(countdown) {
    while (countdown > 0 ) {
        console.log(countdown);
        countdown -= 1;
    }
console.log(countdown);
}
