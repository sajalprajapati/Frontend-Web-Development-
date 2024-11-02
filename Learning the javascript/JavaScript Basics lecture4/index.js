console.log('Hello ji ! Kiase hai saare?');

run(); //running due to the hosting ....
function run()
{
    console.log('How u doing');
}


//function assignment
// console.log(stand());
let stand = function walk()  //<---named function assignment....
{
    console.log('walking');
};
// walk();//we can't use like this way as we have assign it to the variable.
console.log(stand()); //if we write this code before the initilisation then it won't work.look at line 11.


let jump=stand;
console.log(jump());


 
let stand2=function()  //<-----anonymous declaration....
{
  console.log('Without Walking');
}

console.log(stand2);











//hosting ---in this function declaration being done at the top of the V8 engine of the browser ....




//JS is dynamic language
let x=1;
x='a';
console.log(x);

//does same thing apply to function..

function sum(a,b)
{
    return a+b;
}
console.log(sum(1,2));
console.log(sum(1)); //<--- b=undefined ,output=NaN.
console.log(sum('sajal',0)); //<-----the output would be sajal0 which is the nature of dynamic nature.
console.log(sum(1,'Sajal'));



function sum1(a,b)
{
    
    let total=0;
    for(let key of arguments)
    {
        total=total+key;
    }
    return total;
}

// console.log(sum1(1,2));
console.log(sum1(1,2,4,"Sajal")); //carefully looking at the function we can see that only two parameters have been passed to the function 
/*
the questions where is the rest ..for that the answer is argument which stores all the values that is being passed to the function
in the form of an objects.
*/










//Rest Operator...concating the array plus copying the array...


function sum(...args)
{
  console.log(args);
//   console.log(arguments);
}


sum(1,2,3,4,5); 





//default parameters:
function simpleInterest(p=100,r=2,y=10)

{
    return p*r*y/100;
}

console.log(simpleInterest(20));