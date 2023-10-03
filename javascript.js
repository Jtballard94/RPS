
function getPlayersChoice (){
    
    let playersDecision = prompt("Rock Paper or Scissors?").toLocaleLowerCase()
    return playersDecision;
}

let playersChoice = getPlayersChoice();
console.log (playersChoice)



function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3);
    let compDecision = "";

    if (randomNumber === 0){
         compDecision = "rock";
    } else if (randomNumber=== 1 ){
         compDecision = "paper";
    } else if (randomNumber === 2 ){
         compDecision = "scissors";
    }

      return compDecision;
  }
 
const computerChoice = getComputerChoice();
console.log (computerChoice);

function getResult (){
    if (playersChoice != computerChoice) {
        if (playersChoice === ("rock") &&  computerChoice === ("scissors") ){
            return("You Win!!");
        }

        if (playersChoice === ("rock") &&  computerChoice === ("paper") ){
            return("You lose :((");
        }

        if (playersChoice === ("paper") &&  computerChoice === ("scissors") ){
            return("You Lose :((");
        }

        if (playersChoice === ("paper") &&  computerChoice === ("rock") ){
            return("You Win!!");
        }
        

        if (playersChoice === ("scissors") &&  computerChoice === ("paper") ){
            return("You Win!!");
        }
        

        if (playersChoice === ("scissors") &&  computerChoice === ("rock") ){
            return("You Lose :((");
        }
        // return ("One of you win?");

    } else if ( playersChoice = computerChoice ) {
        return ("You Tied! try again");
    }
}

let result = getResult();
console.log (result);

function playRound(playersChoice, computerChoice){
    

}

