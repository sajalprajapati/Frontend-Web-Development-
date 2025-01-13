import React, { useState } from 'react'
import ThemeContext from './ThemeContext';

const ThemeContextProvider = ({children}) => 
{
   const [theme,setTheme]=useState("light");
   
   function toggle() 
   {
     setTheme
     (
       (prev) =>
        (
         prev==="light"?"dark":"light"
        )
    )
   }

   const value={theme,setTheme};

   return <ThemeContext.Provider value={value}>
    {children}
   </ThemeContext.Provider>
}

export default ThemeContextProvider