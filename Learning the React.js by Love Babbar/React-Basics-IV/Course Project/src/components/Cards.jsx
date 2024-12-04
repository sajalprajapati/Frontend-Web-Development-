import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
  const courses = props.courses;
  let category=props.category;
  const [likedCourses,setLikedCourses]=useState([]);
  

  function getCourses() {

    if(category ==="All")
    {
      let allCourses = [];
    Object.values(courses).forEach((arr) => {
      if (Array.isArray(arr)) {
        arr.forEach((courseData) => {
          allCourses.push(courseData);
        });
      } else {
        console.log("This is not an array");
      }
    });
    return allCourses;
    }

    else
    {
      //main sirf specific category ka array pass karunga...
      return courses[category];
    }
    
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} 
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
