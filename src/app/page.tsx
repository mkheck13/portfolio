'use client'

import React from 'react'
import NavbarComponent from "./Components/NavbarComponent";
import SkillsComponent from './Components/SkillsComponent';
import AboutMeComponent from './Components/AboutMeComponent'

const page = () => {

  return(

    <>
      <NavbarComponent/>

      <div>
        <AboutMeComponent/>
        

        

        <div>
          <SkillsComponent/>


        </div>



      </div>
    
    
    
    </>

  )
}
export default page