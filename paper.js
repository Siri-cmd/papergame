function myGame(player,computer) {
    if (player === computer){
        return "tie";
    }

    if ((player==="rock" && computer==="scissors" )
        || (player==="scissors" && computer==="paper")
        || (player==="paper" && computer==="rock")){
        return "win";
    } else {
        return "lose";
    }  
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
console.log(getRandomInt(0, 2));

var lista = ["rock", "paper", "scissors"];
var randomIndex1 = getRandomInt(0, 3);
console.log("Random index for computer choice: " + randomIndex1);

var computerChoice = lista[randomIndex1];
console.log("Random computer choice: " + computerChoice);

var randomIndex2 = getRandomInt(0, 3);
console.log("Random index for user choice: " + randomIndex2);

var userChoice = lista[randomIndex2];
console.log("Random user choice: " + userChoice);
 
console.log("User: " + myGame(userChoice, computerChoice));

