// Code your solutions in this file
const name = ["Guadalupe","Ollie", "Aki"];

function writeCards(name) {
    const messages = [];
    for (let i = 0; i < name.length; i++) {
         messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
       
    }
    return messages;
}


let number = 10;
function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number--;
    }
}
