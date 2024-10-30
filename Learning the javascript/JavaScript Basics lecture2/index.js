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

