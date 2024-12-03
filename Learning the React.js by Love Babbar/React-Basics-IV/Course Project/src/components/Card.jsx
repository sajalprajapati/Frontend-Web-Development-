import React from 'react';
// import { toast } from '@radix-ui/react-toast';
import { useToast } from "@/hooks/use-toast"


const Card = (props) => {
  const course = props.course;

  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;


  function clickHandler()
  {
    // toast("You like this course");
    if(likedCourses.includes(course.id))
    {
      //pehle se like hua pda tha
      
    }
    
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <div className="w-full h-48 bg-gray-100">
        <img
          src={course.image.url}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {course.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {course.description}
        </p>

        {/* Like & Enroll */}
        <div className="flex justify-between items-center mt-4">
          {/* Like Button */}
          <button 
          className="text-gray-500 hover:text-red-500 transition-colors"
          onClick={clickHandler}>
            ❤️
          </button>

          {/* Enroll Button */}
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
