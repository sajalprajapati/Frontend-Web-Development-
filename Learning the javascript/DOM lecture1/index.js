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


let answer=document.querySelector("h1").innerText=`Jai Shree Ram!`;
let answer2=document.querySelector("h1").textContent=`Jai Bajrang Bali`; //<---this one is faster plus have more priority then the innerText











