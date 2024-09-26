let boxes=document.querySelectorAll(".box");
let newBtn=document.querySelector(".new");
let tryBtn=document.querySelector(".try");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let anso=true;
const resetBtn=()=>{
    msgContainer.classList.add("hide");
    enabledBoxes();
}
let winPattern = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach((box) =>{
box.addEventListener("click",()=>{
if(anso){
    box.innerText="O";
    box.style.color="white";
    anso=false;
}
else{
box.innerText="X";
anso=true;
}
box.disabled=true;
winnerMan();
});
});
const disabledBoxes = () =>{
    for(box of boxes){
        box.disabled=true;
    };
};
const enabledBoxes = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`SORRY!The Winner Is: ${winner}`;
    msg.style.color="red";
    msgContainer.classList.remove("hide");
     disabledBoxes();
};

const winnerMan =()=>{
    for(let pattern of winPattern){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!==""&& pos2val!==""&& pos3val!==""){
        if(pos1val===pos2val&&pos2val===pos3val){
            console.log("winner",pos1val);
            showWinner("OSMAN");
           
        }
    }
};
}
newBtn.addEventListener("click",resetBtn);
tryBtn.addEventListener("click",resetBtn);



  
