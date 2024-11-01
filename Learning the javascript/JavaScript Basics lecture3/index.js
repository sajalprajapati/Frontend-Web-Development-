// console.log("How u doing my friend");
// //math object --in-built predefined used to perform mathematical tasks...
// console.log(Math.random()); //random number generating between 0 and 1.
// console.log(Math.PI);
// console.log(Math.round(1.3333));
// console.log(Math.max(4.222,3,3,3,3,2));
// console.log(Math.abs(-2.0));


// //string as object...
// let lastName="Prajapati   ";
// console.log(lastName);
// console.log(typeof(lastName)); //this one is of primitive types...

// let firstName=new String("Sajal"); //this is how we create string as a object
// // console.log(firstName);
// console.log(typeof(firstName));//this will proof our statement..

// //how does the string behave as an object...
// console.log(lastName.length);
// console.log(lastName.includes('ba'));
// console.log(lastName.startsWith('Babb'));
// console.log(lastName.endsWith('pati'));
// console.log(lastName.indexOf('ba'));
// console.log(lastName.toUpperCase('prajapati'));
// console.log(lastName.trim());
// console.log(lastName.replace('pati','PATI'));


// let message='This is my first message';
// let words=message.split(' ');
// console.log(words);


// //template literal...
// // `` <-----this sign is known as the template literal...
// let myMessage=`Hello
// my name is Sajal Prajapati
// .Thank You!`;
// console.log(myMessage);


// const nameOf="Alice";
// const greeting=`Hello,${nameOf}`;
// console.log(greeting);

// const a=10;
// const b=20;
// const answer=`The final pricing is $${a+b*a}`;
// console.log(answer);


// const testingName="Sajal"; //suppose this name is changing with time..we use ${} to show the dynamic nature in the string..
// console.log(`The final answer is ${testingName}`);


// //creating the date and time ...
// const now=new Date();
// console.log(now);

// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getTimezoneOffset());
// // console.log(now.setFullYear(2025));








/*
//creationg of the array
let number=[1,2,3,4,5];
console.log(number); //this is how we create and access the array....
for(let i=0;i<5;i++)
{
    console.log(number[i]);
}

number.push(9);
number.unshift(10);
number.splice(3,0,'a','b','c');

console.log(number);


//Seaching the element in the array...
console.log(number.indexOf(4));
console.log(number.indexOf(0));

console.log(number.includes(7)); //it return true or false...
console.log(number.indexOf(4,2));


//reference ke uper array
let courses=
[
    {
      no:1,
      name:'Sajal'
    }, //this 
    {
     no:2,
     name:'Shivang'
    }
];//above is an array of an object...

console.log(courses);
// console.log(courses.indexOf({no:1,name:'Sajal'})); //not possible because of the different address.

//object ke uper search karna we will be using the callback function...

 let answer = courses.find
 (
    function(course) //here course is an variable...and it is a callback function..
    {
        return course.name==='Sajal' && course.no===3;
    }
 );


 let answer1=courses.find( //this is an arrow function.....
    (course)=>
    {
        return course.name=='Shivang' && course.no===3;
    }
 );

 console.log(answer);
 console.log(answer1);

*/



//removing the elements...
/*
let number=[1,2,3,4,5,6,7];

number.pop();
console.log(number);

number.shift();
console.log(number);


number.splice(2,1);
console.log(number);
*/




//removing the elements in the array....
// let numbers=[1,2,3,4,5];
// // let number2=numbers;
// // number=[];
// // console.log(number);

// numbers.length=0;
// console.log(numbers);











//combining and slicing arrays.

let first=[1,2,3];
let second=[4,5,6];

let combine=first.concat(second);

console.log(combine);


//slicing the array
console.log(combine.slice(2,4));




//spread operator
let combine2=[...first,'a',false,...second,'b',true];
console.log(combine2);
console.log(combine);

//copy kaise create karu
let another=[...combine2]; //object cloning....
console.log(another);



//iterating an array
let arr=[10,20,30,40,50];
for(let value of arr)
{
    console.log(value);
}

//for-each loop

console.log("the number in the array present is:");
// arr.forEach(
//     function(number)
//     {
//      console.log(number);
//     }
// );

arr.forEach(
    number =>console.log(number)
);


//joining an array
let numbers=[10,20,30,40,50];
const joined= numbers.join('$');
console.log(joined);
let message='This is    my first   message';
let parts=message.split(' ');
console.log(parts);



//sorting an array:
let sorting=[3,4,2,35,1];
sorting.sort();// internal convert digit into strings....
console.log(sorting);


let arrayOfobject=
[
    {
        no:3,
        name:'Sajal'
    },
    {
        no:1,
        name:'Shivang'
    },
    {
        no:2,
        name:'Rudresh'
    }
];


arrayOfobject.sort
(
 (a,b) => a.no - b.no //sorting based on the number...
);

arrayOfobject.sort
(
    (a,b) =>
        a.name.localeCompare(b.name)  //sorting based on the alphabetical...
);



arrayOfobject.sort //sorting based on the number and alphabetical..
(
    (a,b) =>
    {
        if(a.no!==b.no)
        {
            return a.no-b.no;
        }

        return a.name.localeCompare.b.name;
    }
);
console.log(arrayOfobject);


//filtering arrays:

let number3=[1,2,-1,-4];


console.log(
    number3.filter(

    function(number)
    {
        return number>=0;
    }
));


let array=
[
    {
     no:1,
     name:'Sajal'
    },
    {
     no:2,
     name:'Shivang'
    },
    {
     no:-3,
     name:'Anurag'
    },
    {
        no:-4,
        name:'Sidu'
    }
];

console.log
(
  array.filter(
    (value) =>
    {
        return value.no>=0 && value.name ==='Sajal';
    }
  )
);


//mapping arrays:
//used to map an element of the array using the mapping arrays.
let numbers1=[7,8,9,10];
console.log
(
   numbers.map
   (
        (value)=>
        {
            return 'student_no: '+value;
        }
    )
);

numbers=
[
    {
      no:1,
      name:'Sajal'
    },
    {
      no:2,
      name:'Shivang'
    },
    {
      no:3,
      name:'Trishul'
    }
];

let items=numbers.map
(
    (value) =>
    {
        return 'Student no:'+value.no+value.name;
    }
);

console.log(items);



//mapping the pimitive array to an object.
let numberss=[1,2,-1,-2];
let item=numberss.filter(
    (value) =>
    {
        return value>=0;
    }
)

let answer=item.map
(
    (num) =>
    {
        let object1={value:num};
        return object1;
    }
)


console.log(answer);