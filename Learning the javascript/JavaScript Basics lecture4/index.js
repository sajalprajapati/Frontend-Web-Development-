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

console.log(simpleInterest(20,undefined));




//getter and setter

//getter---acess properties
//setter--change or mutate the properties.


/*
let person=
{
    fName:'Love',
    lName:'Babbar'
};
*/

/*
let answer=function()
{
    return `${person.fName}  ${person.lName}`; //<---read only function
};
*/


//getter
let person=
{
    fName:'Love',
    lName:'Babbar',
    get fullName() //<---this is not a function
    {
      return `${person.fName} ${person.lName}`; //this is fetching the first name and last name from the object.
    },
    set fullName(value)
    {
    let parts=value.split(' '); //this divides the name in the form of an array.
    this.fName=parts[0];
    this.lName=parts[1];
    }
};

person.fullName="Rahul Kumar";
console.log(person.fullName);









//error handling <-----very important concept !!!!
let person2=
{
    fName:'Sajal',
    lName:'Prajapati',
    get fullName2()
    {
     return `${this.fName} ${this.lName}`;
    },
    set fullName2(value)
    {
        if(typeof(value)!==String)
        {
            throw new Error("You have not sent a string");
        }
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
};

try
{

person2.fullName2="Rahul Kumar";
}
catch(e)
{
    // alert('The value present inside the object is of string whereas you type under datatype');
    // alert(e);
};









//scope: visibility and lifetime of variables and functions...

let a=5;
console.log(a);
console.log(a===5);
// {
//     let b=5;
// }

//console.log(b);//<---will show error in this...


function walking()
{
    let c=444;
}

// console.log(c);





//learning the reducing array...
let arr=[1,2,3,4];
let total=0;
for(let value of arr)
{
    total=total+value;
}

console.log(total);


//to convert whole array in to something
arr.reduce(callbak)