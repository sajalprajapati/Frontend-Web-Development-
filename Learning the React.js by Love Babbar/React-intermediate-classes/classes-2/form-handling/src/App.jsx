import React from 'react'
import { Routes ,Route,Link,NavLink} from 'react-router-dom'
import Home from './components/Home'
import Support from './components/Support'
import Labs from './components/Labs'
import MainHeader from './components/MainHeader'

const App = () => {
  return (
    <div
    className='flex justify-center items-center h-screen w-screen text-3xl'>

     <nav className='flex justify-end items-center bg-slate-200 py-5 px-5 ml-4'>
       {/* <ul>

        <li>
        <Link to="/">Home</Link>
        </li>



        <li>
          <Link to="/support">Support</Link>
        </li>



        <li>
          <Link to="/labs">Labs</Link>
        </li>



        <li>
          <Link to="/about">About</Link>
        </li>
       </ul> */}






       <ul>

       <li>
       <NavLink to="/">Home</NavLink> {/* this will add an active class to the collect lake, which can be used for the user to know at which page it is currently at. */}
       </li>



        <li>
        <NavLink to="/support">Support</NavLink>
        </li>



        <li>
        <NavLink to="/labs">Labs</NavLink>
        </li>



        <li>
        <NavLink to="/about">About</NavLink>
        </li>


        </ul>
     </nav>


     {/*
     Here’s the difference between these two routes in simple words:

1. <Route index element={<Home />} />
Purpose: This route is for the default page (the main page) of a specific section or the app.
Behavior: When the user visits the parent path (like /), they will automatically see the Home component.
Example:
If you have <Route path="/" /> as the parent, this route will load Home when the user visits /.
2. <Route path="*" element={<div>Not Found Page</div>} />
Purpose: This route is for the "catch-all" page when the user goes to a URL that doesn’t exist.
Behavior: If a user types something invalid (like /randompage), this route will show "Not Found Page" instead of a blank screen or an error.
Example:
If the user visits /unknown, they will see "Not Found Page".
Main Difference in Usage:
index Route: Shows the default content for the main or parent route.
path="*" Route: Catches all invalid or unhandled paths to show an error or fallback message.
Analogy:
index Route: Like the home screen of a house that visitors see by default when they walk in.
path="*" Route: Like a warning sign that appears when visitors try to go somewhere they shouldn’t, saying “This area doesn’t exist!”
Let me know if you'd like a diagram or more examples! 😊








      */}


     <Routes > {/* iske  under hi bht saare route define karte hai*/}
       <Route path="/"  element={<MainHeader/>}>
           <Route index element={<Home/>}/> {/*Default Route */}
           <Route path="/support" element={<Support/>}/>
           <Route path="/about" element={<div>About Page</div>}/>
           <Route path="/labs" element={<Labs/>}/>
           <Route path="*" element={<div>Not Found Page</div>}/>
       </Route>
     </Routes>
    </div>
  )
}

export default App