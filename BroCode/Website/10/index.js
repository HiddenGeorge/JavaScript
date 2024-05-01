console.log("Hello, I like pizza!");

        //If statements


const number = document.getElementById("i.age");
const button = document.getElementById("submitButton");
let text;
let age = 0;



button.onclick = function(){
        age = number.value; Number(age);
        if(age<0){text = "You need to born first";}
        else if(age == 0){text = "You just born, go to your mother";}
        else if(age < 18){text = "You are a young person, you can go play Minecraft";}
        else if(age <= 100){text = "Yeah, just an adult, or a old person with retirement";}
        else if(age <= 130){text = "Oh, you are very old, I expect that you had a great life";}
        else{text = "How are you alive? Are you using hack in real life? That's insane";}
        document.getElementById("result").textContent = text;
}