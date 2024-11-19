console.log("Hello World ! How u doing?");

/*
//example of the synchronus JS:
function sync()
{
    console.log("first ");
}

sync();

console.log("second");


//learning of the asyn js:
/*
setTimeout(  //<---asyn code...
    function()
    {
     console.log("How u doing?");
    },
    3000
)
    */

/*
//learning the promises:

let meraPromise =new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log("I'm inside promise")
   },3000);

//    resolve(200); //explicitly marking to fulfilled
//    reject(new Error("ERROR AYI HAI")); //explicilty marking to reject
})

console.log(meraPromise);

console.log("Phela");



// Create a Promise
const fetchUserData = new Promise((resolve, reject) => {
    console.log("Fetching user data...");
  
    setTimeout(() => {
      const success = true; // Simulating whether the server request succeeds or fails.
  
      if (success) {
        resolve({
          name: "Alice",
          age: 25,
          city: "New York",
        }); // Data fetched successfully.
      } else {
        reject("Failed to fetch user data."); // Error occurred.
      }
    }, 2000); // Simulate a 2-second delay.
  });
  
  // Using the Promise
  fetchUserData
    .then((userData) => {
      console.log("User data received:", userData);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("Finished fetching user data.");
    });
  
*/


/*

let meraPromise=new Promise((resolve,reject)=>{
    console.log("Fetching the user information and here we can used API ");

    setTimeout(
        ()=>
        {
           resolve({name:"Sajal",age:22});
        },3000
    );
})


meraPromise.then((userData) => {
    console.log(userData);
});

meraPromise.catch((error)=>{
    console.log("the api called is fail with error 404");
});

meraPromise.finally(()=>{
  console.log("fetching is done");
})

*/


/*
// Create a Promise
const fetchUserData = new Promise((resolve, reject) => {
    console.log("Fetching user data...");
  
    setTimeout(() => {
      const success = false; // Simulating whether the server request succeeds or fails.
  
      if (success) {
        resolve({
          name: "Alice",
          age: 25,
          city: "New York",
        }); // Data fetched successfully.
      } else {
        reject("Failed to fetch user data."); // Error occurred.
      }
    }, 2000); // Simulate a 2-second delay.
  });
  
  // Using the Promise
  fetchUserData
    .then((userData) => {
      console.log("User data received:", userData);
    })
    .catch((error) => {
      var myDiv=document.createElement("div");
      myDiv.classList.add("error-div");
      myDiv.innerHTML="<p>Error 404</p>";

      document.body.appendChild(myDiv);
    })
    .finally(() => {
      console.log("Finished fetching user data.");
    });
                
    */


   

 //promises dependencies
 /*
 let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log("This is promise p1");
  }, 3000);
});



let p3 = p1.then((userData) => {
  let p2 = new Promise((resolve, reject) => {
      resolve("This is promise p2");
  });
  return p2;
});



  p3.then((value)=>{console.log(value)});
  */











  //learning the async -await


  /*
 async function abcd()
  {
    return "Sajal";
  }

 console.log(abcd());

 */



/*
  async function utility()
  {
    let uttarakhandWeather=new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve("Uttarakhand main thand hai");
      },3000);
     });
    
    
    
     let hydcWeather=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("Hyderabad main garmi hai kyu ki woh seashore ke pass hai");
      },1000);
     });
      

     let dM= await uttarakhandWeather;
     let hM=await hydcWeather;


     return [dM,hM];
  }


  console.log(utility());

  */






//fetching the API
/*
async function utility()
{
  try
  {
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1'); 
    let output=await content.json();
    console.log(output);
  }
  catch(error)
  {
    console.log(error);
  }
}

utility();
*/






//sending the data:


async function utility() 
{
  let options=
{
  method: 'POST',
  body: JSON.stringify({
    title: 'Shivang',
    body: 'Prajapati',
    userId: 2,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
 };


 let content= await fetch('https://jsonplaceholder.typicode.com/posts',options);  
 let response=content.json();
 return response;
};

async function helper()
{
  let helping=await utility();
  return helping;
}


console.log(helper());


















