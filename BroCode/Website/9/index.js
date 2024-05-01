console.log("Hello, I like pizza!");

        // Random number generation

// let randomNumber = Math.random() * 6;
// console.log(randomNumber);

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

document.getElementById("button").onclick = function() {
        document.getElementById("number").textContent = Math.ceil(Math.random() * 100);randomNumber
}