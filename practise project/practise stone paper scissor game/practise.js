let userScore=0;   
let compScore=0;                                        

let elements=document.querySelectorAll(".rps");  
let msg=document.querySelector(".pic")
let userScorePara=document.querySelector(".user-score");
let compScorePara=document.querySelector(".comp-score");

const compChoice=()=>{
    let array=["rock","paper","scissor"];                 
    const randIx=Math.floor(Math.random()*3);
    return array[randIx];
}
drawGame=()=>{
    console.log("Draw game");
     msg.innerText="The game is draw.Try again";
     msg.style.backgroundColor=" #333333";

}

const showWinner=(userWin,compChoiceResult,userChoice)=>{
if(userWin){
userScore++;
userScorePara.innerText=userScore;
    console.log("You win!")
    msg.innerText=`You Win! your ${userChoice} beats ${compChoiceResult}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("You lose!");
    msg.innerText=`You Lose!  ${compChoiceResult} beats your  ${userChoice}`;
    msg.style.backgroundColor="red";
}

}
//}

const playGame=(userChoice)=>{
console.log("user choice=", userChoice);    
const compChoiceResult=compChoice();
console.log("computer choice=", compChoiceResult);


if(userChoice===compChoiceResult){
    drawGame();
}
else{
    userWin=true;
    if(userChoice==="rock"){
       userWin = compChoiceResult==="paper"?false:true;
    }
    if(userChoice==="paper"){
        userWin = compChoiceResult==="scissor"?false:true;
     }
     if(userChoice==="scissor"){
       userWin = compChoiceResult==="rock"?false:true;
     }
     showWinner(userWin,compChoiceResult,userChoice);
}

};


elements.forEach ((element)=>{
    element.addEventListener("click",()=>{
const userChoice=element.getAttribute('id');                 
playGame(userChoice);
    });
});