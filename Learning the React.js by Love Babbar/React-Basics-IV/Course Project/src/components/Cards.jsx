import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
  const courses = props.courses;
  const [likedCourses,setLikedCourses]=useState([]);


  function getCourses() {
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
