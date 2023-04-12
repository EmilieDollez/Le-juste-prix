const mysteryNumber = Math.floor( Math.random() * 500 );
// console.log(mysteryNumber);

let numberTry = 1;

let userAnswer2 = askGame();
let userAnswer1 = askNumber();

function askGame(){
    const userGame = prompt("Quel est ton jeu préféré sur BGA ?");
    // console.log(userNumber1);
    return userGame;
}

function askNumber(){
    const userNumber1 = prompt("Donne-moi un nombre entre 0 et 500.");
    // console.log(userNumber1);
    return userNumber1;
}

while (Number(userAnswer1) !== mysteryNumber) {
    if (Number(userAnswer1) < mysteryNumber) {
        alert("C'est trop petit, retente ta chance !");
    }
    else {
        alert("C'est trop grand, retente ta chance !");
    }
    userAnswer1 = askNumber();
    numberTry = numberTry + 1;
    // console.log('nombre essai', numberTry)
}

userWin();

function userWin() {
    alert("Bravo, tu as gagné en " + numberTry + " essais ! Tu as gagné une partie de " + userAnswer2 + " sur BGA quand tu veux !");
}
