/*const BASE_URL=" https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";


const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }
        else if
            (select.name==="to" && currCode==="INR"){
newOption.selected="selected";
            }
        
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element)=>{
let currCode=element.value;
let countryCode=countryList[currCode];
let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
let img=element.parentElement.querySelector("img");
img.src=newSrc;
};
btn.addEventListener("click",async(evt)=>{
evt.preventDefault();
let amount=document.querySelector(".amount input");
let amountVal=amount.value;
if(amountVal==""||amountVal<1){
    amountVal=1;
    amount.value="1";
}
//console.log(fromCurr.value,toCurr.value);
const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response=await fetch(URL);
console.log(response);



// নতুন BASE_URL যোগ করা হয়েছে
/*const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// URL তৈরি করা হচ্ছে, যেখানে fromCurr এর মানকে lowercase এ রূপান্তরিত করা হচ্ছে
const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

// API থেকে ডেটা নিয়ে আসা হচ্ছে
let response = await fetch(URL);

// JSON ডেটা পার্স করা হচ্ছে
let data = await response.json();

// fromCurr এবং toCurr এর মান অনুযায়ী রেট নির্ধারণ করা হচ্ছে
let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

// চূড়ান্ত পরিমাণ হিসাব করা হচ্ছে
let finalAmount = amtVal * rate;

// ফলাফল প্রদর্শন করা হচ্ছে
msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;*/

//});









































const BASE_URL = "https://api.exchangerate.host/convert";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

// Populate dropdowns
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Update flag for the selected currency
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Button click event to fetch exchange rate and calculate
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if (amountVal === "" || amountVal < 1) {
        amountVal = 1;
        amount.value = "1";
    }

    // Build the API URL with query parameters
    const URL = `${BASE_URL}?from=${fromCurr.value}&to=${toCurr.value}&amount=${amountVal}`;

    // Fetch the exchange rate data
    try {
        let response = await fetch(URL);
        let data = await response.json();

        // Extract the conversion rate (result)
        let rate = data.result;
        if (!rate) {
            console.log(`Error: No conversion rate found for ${toCurr.value}`);
            return;
        }

        // Calculate the final amount
        let finalAmount = amountVal * rate;

        // Display the result
        console.log(`${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`);
    } catch (error) {
        console.log("Error fetching exchange rate data:", error);
    }
});
