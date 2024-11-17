const colorCode = document.getElementById("color-code");
const mainDiv = document.getElementsByClassName("main")[0]; // Get the first element with class "main"

const t1=performance.now();
var getColor = () => 
{
            var randomNumber = Math.floor(Math.random() * 16777215);
            var randomCode = "#" + randomNumber.toString(16); // Ensure 6 characters for hex code
            colorCode.innerText = randomCode; // Display the color code
            mainDiv.style.backgroundColor = randomCode; // Set background color
            navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener("click", getColor);

const t2=performance.now();

console.log("the difference is "+(t2-t1));