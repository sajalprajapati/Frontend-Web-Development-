console.log("How u doing my friend");
//math object --in-built predefined used to perform mathematical tasks...
console.log(Math.random()); //random number generating between 0 and 1.
console.log(Math.PI);
console.log(Math.round(1.3333));
console.log(Math.max(4.222,3,3,3,3,2));
console.log(Math.abs(-2.0));


//string as object...
let lastName="Prajapati   ";
console.log(lastName);
console.log(typeof(lastName)); //this one is of primitive types...

let firstName=new String("Sajal"); //this is how we create string as a object
// console.log(firstName);
console.log(typeof(firstName));//this will proof our statement..

//how does the string behave as an object...
console.log(lastName.length);
console.log(lastName.includes('ba'));
console.log(lastName.startsWith('Babb'));
console.log(lastName.endsWith('pati'));
console.log(lastName.indexOf('ba'));
console.log(lastName.toUpperCase('prajapati'));
console.log(lastName.trim());
console.log(lastName.replace('pati','PATI'));


let message='This is my first message';
let words=message.split(' ');
console.log(words);


//template literal...
// `` <-----this sign is known as the template literal...
let myMessage=`Hello
my name is Sajal Prajapati
.Thank You!`;
console.log(myMessage);


const nameOf="Alice";
const greeting=`Hello,${nameOf}`;
console.log(greeting);

const a=10;
const b=20;
const answer=`The final pricing is $${a+b*a}`;
console.log(answer);


const testingName="Sajal"; //suppose this name is changing with time..
console.log(`The final answer is ${testingName}`);