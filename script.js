let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget=()=>{
   return Math.floor(Math.random()*10);
}

const compareGuesses=(human,comp,secret)=>{
    humanScore=Math.abs(human-secret);
    computerScore=Math.abs(comp-secret);
    if (humanScore>computerScore){
        return true;
    } else if(humanScore==computerScore){
        return true;
    }else{
        return false;
    }

}
const updateScore=winner=>{
    if(winner==="human"){
        humanScore++;
    }
    else{
        computerScore++;
    }
}

const advanceRound=()=>currentRoundNumber++;