"use client";


import React from 'react'
import Image from "next/image";
import dash from '../Assets/dash.png'
import advice from '../Assets/advice.png'
import pokelog from '../Assets/pokelog.png'
import tipclac from '../Assets/tipcalc.png'
import caddyTrack from '../Assets/caddyTrack.png'

const ProjectsComponent = () => {
  return (
    <>
     <h1 id="projects" className="text-center pt-12 fontlife font-bold text-4xl text-teal-500">Projects</h1>

     <div className='mx-60'>

     <div className="carousel w-full">

      
  <div id="slide1" className="carousel-item relative w-full">  
  <a href="https://socialmediadashboard-sage.vercel.app/" target='_blank'>
    <Image src={dash} className='w-full' alt="social media dashboard"/>
  </a>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide2" className="carousel-item relative w-full">
    <a href="https://advicegentwo.vercel.app/" target='_blank'>
      <Image src={advice} className='w-full' alt="social media dashboard"/>
    </a>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
  <a href="https://pokerebuild.vercel.app/" target='_blank'>
      <Image src={pokelog} className='w-full' alt="social media dashboard"/>
    </a>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
  <a href="https://tipcalculator-kappa.vercel.app/" target='_blank'>
      <Image src={tipclac} className='w-full' alt="social media dashboard"/>
    </a>
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide5" className="carousel-item relative w-full">
<a href="https://caddytrackfrontend.vercel.app/" target='_blank'>
      <Image src={caddyTrack} className='w-full' alt="social media dashboard"/>
    </a>
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>



</div>








     </div>

    
    
    
    
    
    </>
  )
}

export default ProjectsComponent
