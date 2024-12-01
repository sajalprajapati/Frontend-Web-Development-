import React from 'react';
import Card from './Card'; // Assuming Card component is being used to display each city

const Tour = (props) => {
  return (
    <div>
        <div>
            <h2>Plan With Me !</h2>
        </div>

        {/* Displaying the Cards */}
        <div>
            {props.tours.map((tour) => {
                return (
                    //{...tour } <-----copy is being sent to the Card...cloning the object into object
                    <Card {...tour}/>
                );
            })}
        </div>
    </div>
  );
};

export default Tour;
