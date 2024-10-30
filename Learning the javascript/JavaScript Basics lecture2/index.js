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

let x=prompt("Enter the value of x:");
let y=prompt("Enter the value of y:");

let rectangleObj1= createRectangle(x,y);
console.log(rectangleObj1['area']());


