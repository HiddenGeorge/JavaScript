console.log("Hello");
console.log("I like pizza");

                    //here, starts to use the correct numbers according to the video

// let username;
// username = window.prompt("What's your username?");
// console.log(username);

let username;

document.getElementById("button").onclick = function(){
username = document.getElementById("mytext").value;
console.log(username);
document.getElementById("myh1").textContent = `Hello ${username}`
}