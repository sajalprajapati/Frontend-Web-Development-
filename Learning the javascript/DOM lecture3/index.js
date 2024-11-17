
/*
console.log("Jai Shree Ram!");

//adding 100 paragraph tag
const t1=performance.now();
for(let i=1;i<=100;i++)
{
    let newElement=document.createElement('p');
    newElement.textContent='This is para+'+i;

    document.body.appendChild(newElement);
}
const t2=performance.now();

console.log("the difference between the first code is "+(t2-t1));
//answer is the difference between the first code is 0.39999999990686774




const t3=performance.now();
//optimising a bit..
let myDiv=document.createElement('div');
for(let i=1;i<=100;i++)
{
 let element=document.createElement('p');
 element.textContent='This is para'+i;
 myDiv.appendChild(element);
}

document.body.appendChild(myDiv);
const t4=performance.now();

console.log("the difference between second code is"+(t4-t3));


//answer is the difference between second code is0.10000000009313226
//which above code is faster??????
//answer using the performance.now()...




//learning the best practise to flow :that is the document fragment .

const t5=performance.now();
let fragment=document.createDocumentFragment();


for(let i=1;i<=100;i++)
{
    let newElement=document.createElement('p');
    newElement.textContent='This is para+'+i;

    fragment.appendChild(newElement);
}


document.body.appendChild(fragment); ///single reflow single repaint...


const t6=performance.now();
console.log("the difference between the third code is "+(t6-t5));










//single threading language understanding:
function addPara()
{
    let para=document.createElement('p');
    para.textContent='Js is Single ';
    document.body.appendChild(para);
}


function appendNewMessage()
{
    let para=document.createElement('p');
    para.textContent='Kya haal chaal'
    document.body.appendChild(para);
}


addPara();
appendNewMessage();


*/



//synchronous :



//event loop:
console.log("hi");



console.log("Hello");


document.querySelector("#btn").addEventListener(
    "click",
    () =>
    {
        console.log("123");
    }
);




setTimeout
(
    function()
    {
        console.log("Hi I'm running late!")
    },
    20000
);
