console.log("Hello, I like pizza!");

        //Counter Program

let value = 0;

document.getElementById("increase").onclick = function(){
        value++;
        document.getElementById("countlabel").textContent = value;
}

document.getElementById("decrease").onclick = function(){
        value--;
        document.getElementById("countlabel").textContent = value;
}

document.getElementById("reset").onclick = function(){
        value=0;
        document.getElementById("countlabel").textContent = value;
}