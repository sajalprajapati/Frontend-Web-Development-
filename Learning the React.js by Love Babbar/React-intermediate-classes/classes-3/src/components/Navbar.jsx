import React from 'react'
import Logo from '../assets/Logo.svg'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'
// import { Description } from '@radix-ui/react-toast'

const Navbar = (props) => {
 
   const {toast} =useToast();
    //isLoggedIn by default is false :
  let  {isLoggedIn,setIsLoggedIn} =props;

  return (
    <div className='flex justify-evenly'>
       <NavLink to='/'>
         <img src={Logo} alt='logo' width={160} height={32} loading='lazy'/>
       </NavLink>

       <nav>
          <ul className='flex gap-3'>
             <li>
               <NavLink to='/'>
                 Home
               </NavLink>
             </li>


             <li>
               <NavLink to='/'>
                 About
               </NavLink>
             </li>


             <li>
               <NavLink to='/'>
                 Contact
               </NavLink>
             </li>
          </ul>
       </nav>


       {/* Login signup logout abd dashboard */}
       <div className='flex ml-4 gap-3 '>

        {/* 
        
           { ( yaha apni condition likho jaise hum if else main likhte hai)   <-------yeah walo arrow ki baat kar rha tha main
           
           
           
           }
         
        
        
          */}    
        {/* without using the if else ...we can write this ..below way look at the bracket.... */}
          {  !isLoggedIn && 
            <NavLink to="/login">
                <button>Login</button>
            </NavLink>
          }


          { !isLoggedIn &&

            <NavLink to="/signup">
                <button
                onClick={()=>{
                    toast({description:"Successful Sign Up"})
                }}>SignUp</button>
            </NavLink>
          }




          { isLoggedIn && 

            <NavLink to="/login">
                <button onClick={()=>{
                 setIsLoggedIn(false);
                //   toast.success("Yo have sccessfully logged out");
                toast({description:"Successful Logged Out"})
                 }}>Log Out</button>
            </NavLink>
          }



          

          { isLoggedIn &&

            <NavLink to="/dashboard">
                <button>Dashboard</button>
            </NavLink>
          }


       </div>
    </div>
  )
}

export default Navbar