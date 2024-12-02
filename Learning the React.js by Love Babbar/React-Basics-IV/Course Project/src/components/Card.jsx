import React from 'react'
// import {FcLike} from 'react-icons'

const Card = ({course}) => {
  return (
    <div>
       <div>

        <img src={course.image.url}></img>

        <div>
           <button>
              {/* how do we import icon in react */}
              {/* <FcLike fontSize="1.75rem"/> */}
              ❤️
           </button>
        </div>


        <div>
          <p>
            {course.title}
          </p>

          <p>
            {course.description}
          </p>

        </div>

       </div>
    </div>
  )
}

export default Card