import React from 'react'
import Card from './Card';
// import Card from '../components/Card'

const Cards = ({courses}) => {

    let allCourses=[];

  const getCourses =() =>
 {
   
    //  console.log(courses);
    //returns the list of all courses received fomr the api
        Object.values(courses).forEach((courseCategory) =>{
        courseCategory.forEach((course) =>{
          allCourses.push(course)
        })
           })

    return allCourses;
  }

  return (
    <div>
       {getCourses().map((course) => {
         return(
            <Card course={course} key={course.id}/>
         )
       })}
    </div>
  )
}

export default Cards