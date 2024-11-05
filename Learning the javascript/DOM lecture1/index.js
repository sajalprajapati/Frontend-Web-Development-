// let a = document.querySelector(".header"); // Selects the first element with the class "header"
// let b = document.querySelector("#header"); // Selects the element with the id "header"
// let c = document.querySelector("header"); // Selects the first <header> element

// console.log("Content of a:", a ? a.innerHTML : "Element not found"); // Prints HTML inside the element if it exists
// console.log("Content of b:", b ? b.innerHTML : "Element not found"); // Prints HTML inside the element if it exists
// console.log("Content of c:", c ? c.innerHTML : "Element not found"); // Prints HTML inside the element if it exists


// console.log("Below is the code for the d section");
// let d=document.querySelectorAll(".header"); //<------this will provide the Node of a 
// d.forEach(
//     (node) =>
//     {
//         console.log(node.innerHTML);
//     }
// )


/*
let answer=document.createElement("div");
answer.classList.add("answer")
answer.innerHTML=
`
<h1>How u doing ?</h1>
`

document.querySelector("#main").appendChild(answer);
*/

// console.log(document.querySelector("body").outerHTML);


//let answer=document.querySelector("h1").innerText=`Jai Shree Ram!`;
//let answer2=document.querySelector("h1").textContent=`Jai Bajrang Bali`; //<---this one is faster plus have more priority then the innerText





console.log("Hello my friend how u doing?");
/*
let creating_the_child=document.createElement('span');
let main=document.querySelector("#main");
main.appendChild(creating_the_child).innerHTML=
`
<h1>Jai Shree Ram!</h1>
<h2>Jai BajrangBali</h2>
`;
*/

/*
document.querySelector("#main").appendChild(document.createElement("span")).innerHTML=
`
<h1>How u doing?</h1>`
*/



/*
let element=document.getElementById("myDiv");

element.insertAdjacentHTML("beforebegin","<p>Before the div it is being added.</p>");

element.insertAdjacentHTML("beforeend","<h1>Jai Shree Ram!</h1>");

element.insertAdjacentHTML("afterbegin","<h2>Jai BajrangBali!</h2>");

element.insertAdjacentHTML("afterend","<h3>Jai Sita maa</h3>");
*/



/*
document.querySelector("#myDiv").appendChild(document.createElement("div")).innerHTML=
`<p>
Jai Shree Ram!
</p>`;


let paragraph=document.querySelector("p");
paragraph.insertAdjacentHTML("beforeend","<p> Jai BajrangBali!</p>")
*/







// Step 1: Select the parent element
let headerDiv = document.getElementById("header");

// Step 2: Select all <h3> elements
let allH3Elements = headerDiv.querySelectorAll("h3");

// Step 3: Target the second <h3> (index 1) and remove it
headerDiv.removeChild(allH3Elements[1]);
