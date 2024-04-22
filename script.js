const btn = document.querySelector(".submitBtn"),
    inputYear = document.querySelector("#year"),
    inputMonth = document.querySelector("#month"),
    inputDay = document.querySelector("#day");

let isValid = false;

const outputYear = document.querySelector('.outputYear'),
    outputMonth = document.querySelector('.outputMonth'),
    outputDay = document.querySelector('.outputDay');

const errorDay = document.querySelector('.errorDay'),
    errorMonth = document.querySelector('.errorMonth'),
    errorYear = document.querySelector('.errorYear');

btn.addEventListener("click", calculate);

inputDay.addEventListener('input', ()=>{
    if(+inputDay.value > 31){
        errorDay.style.display = "block";
        isValid = false;
        return;
    }else{
        isValid = true;
        errorDay.style.display = "none"
    }
    
    if(+inputDay.value === "0"){
        isValid = false;
        errorDay.style.display = "block";
        errorDay.textContent = "This field is required";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        errorDay.style.display = "none"
    }
    
})

inputMonth.addEventListener('input', ()=>{
    if(+inputMonth.value > 12){
        errorMonth.style.display = "block";
        isValid = false;
        return;
    }else{
        isValid = true;
        errorMonth.style.display = "none"
    }
    if(+inputMonth.value === 0){
        isValid = false;
        errorMonth.style.display = "block";
        errorMonth.textContent = "This field is required";
        isValid = false;
        return;
    }
    else{
        // isValid = true;
        errorDay.style.display = "none"
    }
    
})

inputYear.addEventListener('input', ()=>{
    if(+inputYear.value > 2024){
        errorYear.style.display = "block";
        isValid = false;
        return;
    }else{
        isValid = true;
        errorYear.style.display = "none"
    }
    if(+inputYear.value === 0){
        isValid = false;
        errorYear.style.display = "block";
        errorYear.textContent = "This field is required";
        // isValid = false;
        return;
    }
    else{
        // isValid = true;
        errorDay.style.display = "none"
    }
    
})

function calculate(){
    if(+inputDay.value > 31 || +inputMonth.value > 12 || +inputYear > 2024){
        alert("error, inputs must be valid !");
    }else{
        let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        let birthdayObj = new Date(birthday);
        let ageDifMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDifMill);
        let ageYears = ageDate.getUTCFullYear()-1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay()-1;

        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYears;

    }
}