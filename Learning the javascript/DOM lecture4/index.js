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
                