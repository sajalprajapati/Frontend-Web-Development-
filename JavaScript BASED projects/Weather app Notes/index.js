//creating the weather app:
 
//api key=30b8ba1b5017abdeea47f84a45cf5db2 


/*
 //calling the API network call:
 const API_KEY="d1845658f92b31c64bd94f06f7188c9c";
async function showWeather()
{
    try{ let city="chad";
   

        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
        const data= await response.json();
    
        console.log("Weather is",data);
      
        showingData(data);
    }
    catch(err)
    {
        newPara.textContent='404';
        document.body.appendChild(newPara);
    }
   
}


async function showingData(data)
{

    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} C`;
    document.body.appendChild(newPara);}

showWeather();

*/


/*
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

async function showWeather() {
    try {
        let city = "Somalia";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        if (!response.ok) {
            // If response is not ok, throw an error to be caught in the catch block
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Weather is", data);

        showingData(data);
    } catch (err) {
        // Show error message (404 or other) on the UI
        let newPara = document.createElement('p');
        newPara.textContent = "404 - City not found or API error";
        document.body.appendChild(newPara);
        console.error(err); // Log error for debugging
    }
}

async function showingData(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

showWeather();


*/



/*
 //knowing the cuurent location:
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            alert(`Your location: Latitude ${latitude}, Longitude ${longitude}`);
        },
        (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.");
                    break;
            }
        }
    );
} else {
    alert("Geolocation is not supported by this browser.");
}



//our location: Latitude 29.198532, Longitude 78.9507165
*/

if(navigator.geolocation)
{
  navigator.geolocation.getCurrentPosition
  (
    (position) =>
    {
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;

        console.log(`${latitude}+${longitude}`);
    },
    (error) =>
        {
          switch(error)
          {
              case error.PERMISSION_DENIED:
                   alert("User denied the request for Geolocation.");
                   break;
      
               case error.UNKNOWN_ERROR:
                  alert("An unknown error occured");
                  break;   
          }
        }
  )
  
}

else
{
    alert("Geolocation is not supported by this browser");
}