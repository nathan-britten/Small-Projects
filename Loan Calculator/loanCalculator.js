let loanAmount = document.querySelector("#loanAmount");
let annualInterestRate = document.querySelector("#interest");
let repaymentYears = document.querySelector("#repayment");
let calculateButton = document.querySelector("#calculateButton");
let totalPayment = document.querySelector("#totalToPay");
let payPerMonth = document.querySelector("#payPerMonth");
let amountOfInterest = document.querySelector("#amountOfInterest");

const loanValue = loanAmount.innerText;

let initialAmount;
let interest;
let repaymentTerm;
let totalAmount;

//event listeners
loanAmount.addEventListener("keyup", amountOfMoney);
annualInterestRate.addEventListener("keyup", interestRate);
repaymentYears.addEventListener("keyup", repaymentAnnual);
calculateButton.addEventListener("click", doTheMath);


function amountOfMoney(e){
initialAmount =  e.target.value;

console.log(initialAmount);
}

function interestRate(e){
  interest = e.target.value;
  interest /= 100;
  interest /= 12;
  
  console.log(interest)
}

function repaymentAnnual (e){
  repaymentTerm = e.target.value;
  repaymentTerm *= 12;
  console.log(repaymentTerm)

}

function doTheMath(){


  // totalAmount = initialAmount*(1 + (interest*repaymentTerm));

  //monthly repayments
  let perMonth = initialAmount * ((interest *(Math.pow((1 + interest),repaymentTerm)))/((Math.pow((1 + interest),repaymentTerm)) - 1))
  payPerMonth.value = perMonth.toFixed(2)

//total amount
console.log(totalAmount)
totalAmount = perMonth * repaymentTerm;
console.log(totalAmount)

totalPayment.value = totalAmount.toFixed(2);

console.log(totalAmount);
  //total interest 
  let totalInterest = totalAmount - initialAmount;
  amountOfInterest.value = totalInterest.toFixed(2);

if(totalPayment.value === "NaN"){

  document.querySelector(".errorMessage").classList.add("errorMessage-transistion");
    document.querySelector(".errorMessage").classList.remove("errorMessage-hidden");

  setTimeout(function(){
    document.querySelector(".errorMessage").classList.add("errorMessage-transistion");
      document.querySelector(".errorMessage").classList.add("errorMessage-hidden");

  },2000);
} else {
  //show output
  document.querySelector(".outsideline").classList.remove("output")
  document.querySelector(".output").classList.add("show")
  let allOutputs = document.querySelectorAll(".output-item");
  for(let i = 0; i< allOutputs.length; i++){
    allOutputs[i].classList.add("output");
  }


 

  setTimeout(function(){

    document.querySelector(".outsideline").classList.add("output")
    for(let i = 0; i< allOutputs.length; i++){
      allOutputs[i].classList.remove("output");
    }

  },1500)
}
}




