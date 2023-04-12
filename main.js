const mysteryNumber = Math.floor( Math.random() * 500 );
// console.log(mysteryNumber);

let numberTry = 1;

let userAnswer = askNumber();

function askNumber(){
    const userNumber1 = prompt("Donne-moi un nombre entre 0 et 500.");
    // console.log(userNumber1);
    return userNumber1;
}

while (Number(userAnswer) !== mysteryNumber) {
    if (Number(userAnswer) < mysteryNumber) {
        alert("C'est trop petit, retente ta chance !");
    }
    else {
        alert("C'est trop grand, retente ta chance !");
    }
    userAnswer = askNumber();
    numberTry = numberTry + 1;
    // console.log('nombre essai', numberTry)
}

userWin();

function userWin() {
    alert("Bravo, tu as gagné en " + numberTry + " essais !");
}
