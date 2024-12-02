import React from 'react';
import Card from './Card';

const Tour = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {props.tours.map((tour) => {
        return (
          <Card key={tour.id} {...tour} removeTour={props.removeTour} />
        );
      })}
    </div>
  );
};

export default Tour;
