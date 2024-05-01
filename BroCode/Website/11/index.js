console.log("Hello, I like pizza!");

        // Checked property

        //definitions
//Sub checkbox
const sub = document.getElementById("checkbox");
//cards
const visa = document.getElementById("visaButton");
const mastercard = document.getElementById("mastercardButton");
const paypal = document.getElementById("paypalButton");
//submit
const submit = document.getElementById("submit");
//texts
const text1 = document.getElementById("subResult");
const text2 = document.getElementById("cardResult");

        //code
submit.onclick = function(){
        if(sub.checked){text1.textContent = "You Subscribed, thanks!"}
        else{text1.textContent = "You need to subscribe first"}


        if(visa.checked){text2.textContent = "You got Visa payment"}
        else if(mastercard.checked){text2.textContent = "You got MasterCard payment"}
        else if(paypal.checked){text2.textContent = "You got Paypal payment"}
        else{text2.textContent = "You got any payment, so bad for us"}
}