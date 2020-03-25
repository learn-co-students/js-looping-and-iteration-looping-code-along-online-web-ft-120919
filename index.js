
// const event = ["surprise"]
function writeCards(names, event) {
for (let i = 0; i < names.length; i++) {
    names[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
}
return names;
}
writeCards(names);

// function countDown(num) {
//     let i = num; 
//     while (i >= 0) {
//         console.log(i); 
//         i--;
//     }
// }
function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }

}