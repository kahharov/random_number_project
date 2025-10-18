const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min;
}

const randomNumber=()=>{
    const minInput=document.getElementById("minNumber");
    const maxInput=document.getElementById("maxNumber");
    const minInputValue=Number(minInput.value);
    const maxInputValue=Number(maxInput.value);
    console.log("Tugma ishlamoqda");
    const randomDisplay=document.getElementById("random");
    randomDisplay.innerText=generateRandomNumber(minInputValue,maxInputValue);
}
const btnGenerate=document.getElementById("generate");
btnGenerate.addEventListener('click',randomNumber);
