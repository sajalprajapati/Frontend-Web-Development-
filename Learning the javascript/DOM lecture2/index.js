/*
// Log a message to ensure the script is connected
console.log("Jai Shree Ram !!");

// Get the button and username input field
const btn = document.getElementById("button");
const usernameInput = document.getElementById("Username");

// Add an event listener to the button for clicks
btn.addEventListener("click", () => {
    // Get the username entered by the user
    const username = usernameInput.value.trim();

    // If the username is not empty, process it
    if (username) {
        // Get visitor data from localStorage
        let visitors = JSON.parse(localStorage.getItem("visitors")) || [];

        // Add the new visitor's name to the list
        visitors.push(username);

        // Update the data in localStorage
        localStorage.setItem("visitors", JSON.stringify(visitors));

        // Alert the programmer about the submission
        alert(`User "${username}" has visited the website.`);

        // Log the current list of visitors for the programmer
        console.log("List of Visitors:", visitors);
    } else {
        alert("Please enter your username!");
    }
});


document.removeEventListener()
*/





//learning the removing the eventListener:
const btn=document.getElementById("button");

function eventFunction()
{
    console.log("I have clicked on the document");
    alert("Btn is clicked");
}

btn.addEventListener("click",eventFunction); //<--this is pointing to the eventFunction 

// btn.removeEventListener("click",eventFunction); //<---this is pointing to the same address of the eventFunction.



const content=document.getElementById("wrapper");
content.addEventListener("click",function(event) //<---event specific data it will provide...
{
    console.log(event);
})
 

//the default actions
const anchorTag=document.querySelector("#Selena");
anchorTag.addEventListener(
    "click",
    (event)=>
    {
      event.preventDefault();
      console.log("abhi nhi hoga click ");
    }
)
