let userChoice = prompt('pari o dispari?');
let userNumber = Number.parseInt(prompt('inserisci un numero da 1 a 5'), 10);

console.log(userChoice);
console.log(userNumber, ' numero utente ')


function getCompNum(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
}


let randomCompNum = getCompNum(1, 5);
console.log(randomCompNum, ' numero computer ');