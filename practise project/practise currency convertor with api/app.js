const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
for(let select of dropdowns){
    for(let currCode in countryList){
let newOption=document.createElement("option");
newOption.innerText=currCode;
newOption.value=currCode;
if(select.name==="from" && currCode==="USD" ){
    newOption.selected=true;
}
else if(select.name==="to"&& currCode==="INR"){
    newOption.selected=true;
}
select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
updateFlag(evt.target);
    })
}
updateFlag=(element)=>{
let currCode=element.value;
let countryFlag=countryList[currCode];
let newSrc=`https://flagsapi.com/${countryFlag}/flat/64.png`
let img=document.querySelector("img");
img.src=newSrc;
}
btn.addEventListener("click",(evt)=>{
evt.preventDefault();
let amount=document.querySelector(".main-body input");
let amountVal=amount.value;
if(amountVal===""||amountVal<1){
    amountVal=1;
    amount.value="1";
    
}

})

