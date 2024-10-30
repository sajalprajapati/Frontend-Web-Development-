// alert('Jai Shree Ram');
console.log('Jai Shree Ram');
console.log('How u doing');

//learning the objects in javascript!

// let person=
// {
//     name:'Sajal',
//     age:22
// }

// console.log(person.name);

// below is the object creation:
/*
let rectangle=
{
    length:3,
    breadth:2,
    area:function()
    {
        return this.length*this.breadth; //function is called as method in the object.
    }
};



//accessing the object methods and properties.
console.log(rectangle['length']);
console.log(rectangle['breadth']);
console.log('The area is present below');
console.log(rectangle['area']()); //this is how we call method of the object in the javascript.
console.log(rectangle.area());

*/
//above type of programming we are is Object Oriented Programming.
 

//to create object mutliple times ,we have two methods -- factory function and constructor function.

//applying factory function:

//writing it have two methods:

//case 1:
/*
function createRectangle() //factory function 
{
    let rectangle=
  {
    length:3,
    breadth:2,
    area:function()
    {
        return this.length*this.breadth; //function is called as method in the object.
    }
   };

   return rectangle;
}
*/

/*
//case 2:
function createRectangle(x, y) //factory function 
{
    return rectangle=
  {

     length:x,
     breadth:y,
     area()
     {
        return this.length*this.breadth; //function is called as method in the object.
     }

   };

}

// let x=prompt("Enter the value of x:");
// let y=prompt("Enter the value of y:");

let rectangleObj1= createRectangle(5,4);
console.log(rectangleObj1['area']());


let rectangleObj2=createRectangle(6,7);
console.log(rectangleObj2['area']());

let rectangleObj3=createRectangle(8,9);
console.log(rectangleObj3['area']());

*/

//applying the construction function:


//we have to follow notation---->Pascal Notation [e.g.---first letter of every word is capital]

/*
function Rectangle(x,y)
{
  this.length=x,
  this.breadth=y,
  this.area=function()
  {
    return this.length*this.breadth;
  }
};


let rect=new Rectangle(4,5);
console.log(rect.length);
console.log(rect.breadth);
console.log(rect.area());

rect.color='yellow'; //dynamic nature of the object...I can add value like this in the object.
console.log(rect.color);


console.log(rect);
let react1=new Rectangle(5,6);
console.log(react1.length);
console.log(react1.breadth);
console.log(react1.area());
console.log(react1.color);
console.log(react1);

*/




//Constructor Property
/*

function Rectangle()
{
  this.length=1,
  this.breadth=3,
  this .area=function()
  {
     return this.length*this.breadth;
  }
};


let rectangleObject=new Rectangle();
*/

// let a=10;
// let b=a;

// a++;
// console.log(a);
// console.log(b);


let a={value:10};
let b=a;
a.value++;

console.log(a.value);
console.log(b.value);

