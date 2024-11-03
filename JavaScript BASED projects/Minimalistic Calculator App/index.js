const sevenButton = document.querySelector("#Seven");
const display = document.querySelector("#display");
let arr = [];

// Add event listener to the button
sevenButton.addEventListener('click', () => {
    arr.push("7"); // Push the value "7" to the array
    display.textContent = arr.join(""); // Display array as a continuous string
});

console.log(arr);