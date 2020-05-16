var secretNumber = 4;
// var stringGuess=prompt("Guess a number: ");
// var guess=Number(stringGuess);
var guess=Number(prompt("Guess a number: "));

if(guess===secretNumber){
    alert("I think you are right!!!");
}
else if(guess>secretNumber){
    alert("Too high,guess again");
}
else{
    alert("Too low,guess again");
}



// var secretNumber = 4;
// var guess=prompt("Guess a number: ");

// if(Number(guess)===secretNumber){
//     alert("I think you are right!!!");
// }
// else if (Number(guess)>secretNumber){
//     alert("Too high,guess again");
// }
// else{
//     alert("Too low,guess again");
// }