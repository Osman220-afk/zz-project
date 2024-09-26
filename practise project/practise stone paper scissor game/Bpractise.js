
// this is the 2nd js file in which i am trying for last finishing

let userScore=0;
let compScore=0;
let rps=document.querySelectorAll(".rps");

const compChoice = ()=>{
    let array=["rock","paper","scissors"];
    let ans=Math.floor(Math.random()*3);
    return array[ans];
};

const playGame=(id)=>{
    console.log("user choice=",id);
    const compChoiceResult=compChoice();
    console.log("computer choice=",compChoiceResult );
};

   rps.forEach((element)=>{
        element.addEventListener("click",()=>{
let id=element.getAttribute("id");
playGame(id);
        });

        });

