// Use a reliable format for calculation but display "12:00 a.m." for the user
const endDate = "March 13, 2025 00:00:00";
document.getElementById("end-date").innerText = "March 13, 2025 12:00 a.m."; // Display format

const inputs = document.querySelectorAll("input");

function clock() { 
    const end = new Date(endDate); // Use reliable format for calculations
    const starting = new Date();   // Current date and time
    const difference = (end - starting) / 1000; // Difference in seconds

    if (isNaN(difference) || difference < 0) {
        // Handle if the date is invalid or has passed
        inputs[0].value = 0;
        inputs[1].value = 0;
        inputs[2].value = 0;
        inputs[3].value = 0;
        return;
    }

    // Convert the difference to days, hours, minutes, and seconds
    const days = Math.floor(difference / 3600 / 24);
    const hours = Math.floor((difference / 3600) % 24);
    const minutes = Math.floor((difference / 60) % 60);
    const seconds = Math.floor(difference % 60);

    // Display the values in the respective input fields
    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}

// Call clock initially and set an interval to update every second
clock();
setInterval(clock, 1000);
