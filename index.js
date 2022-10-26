let splitwise=0;
function five(){
    let bill=Number(document.querySelector("input.bill-amt").value);
    let tipPerPerson=(5/100)*bill;
    splitwise=tipPerPerson;
        
}
function ten(){
    let bill=Number(document.querySelector("input.bill-amt").value);
    let tipPerPerson=(10/100)*bill;
    splitwise=tipPerPerson;
        
}
function fifteen(){
    let bill=Number(document.querySelector("input.bill-amt").value);
    let tipPerPerson=(15/100)*bill;
    splitwise=tipPerPerson;
        
}
function twwntyfive(){
    let bill=Number(document.querySelector("input.bill-amt").value);
    let tipPerPerson=(25/100)*bill;
    splitwise=tipPerPerson;
        
}
function fifty(){
    let bill=Number(document.querySelector("input.bill-amt").value);
    let tipPerPerson=(50/100)*bill;
    splitwise=tipPerPerson;
        
}
document.querySelector("#cust").addEventListener("input",function(){
    let percent=Number(document.querySelector("#cust").value);
    let bill=Number(document.querySelector("input.bill-amt").value);
    let tipPerPerson=(percent/100)*bill;
    splitwise=tipPerPerson;

})
// function su(){
//     let people=Number(document.querySelector("input.ppl").value);
//     document.querySelector("h3.amt").innerHTML=Math.abs(splitwise/people);

// }

let input_person=document.querySelector("input.ppl");
input_person.addEventListener("input",function(){
    
    let people=Number(document.querySelector("input.ppl").value);
    document.querySelector(".amt").innerHTML="$ "+Math.abs(splitwise/people).toFixed(2);;
    let bill=Number(document.querySelector("input.bill-amt").value);
    document.querySelector(".amt-per-person").innerHTML="$ "+Math.abs(bill/people).toFixed(2);


})

function reset(){
    document.querySelector(".amt").innerHTML="$0.00";
    document.querySelector(".amt-per-person").innerHTML="$0.00";

}


// function submit(){
//     let people=Number(document.querySelector("pp").value);
//     document.querySelector("h3.amt").innerHTML=splitwise/people;
// }