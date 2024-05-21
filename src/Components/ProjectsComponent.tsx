"use client";


import React from 'react'
import Image from "next/image";

import advice from '../Assets/advice.png'
import pokelog from '../Assets/pokelog.png'

import caddyTrack from '../Assets/caddyTrack.png'

const ProjectsComponent = () => {
  return (
    <>
     <h1 id="projects" className="text-center pt-12 fontlife font-bold text-4xl text-teal-500">Projects</h1>
     <br />

     <div className='xl:grid xl:grid-cols-3 md:flex md:flex-col justify-around items-center gap-14'>

     <div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image src={caddyTrack} className='w-full' alt="full stack app"/></figure>
  <div className="card-body">
    <h2 className="card-title">Caddy Track</h2>
    <p>Golf Club Tracking Site / Full Stack Project built in NextJS with TS</p>
    <div className="card-actions justify-end">
    <a href="https://caddytrackfrontend.vercel.app/" target='_blank'>
    <button className="btn btn-accent" >Go To Site</button>
    </a> 
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image src={pokelog} className='w-full' alt="pokemon project" /></figure>
  <div className="card-body">
    <h2 className="card-title">PokeLog</h2>
    <p>Pokemon web app using Pokemon API in React with TS</p>
    <div className="card-actions justify-end">
    <a href="https://pokerebuild.vercel.app/" target='_blank'>
    <button className="btn btn-accent">Go To Site</button>
      </a>
    </div>
  </div>
</div>


  


<div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image src={advice} className='w-full' alt="advice generator"/></figure>
  <div className="card-body">
    <h2 className="card-title">Advice Generator</h2>
    <p>Advice generator project</p>
    <div className="card-actions justify-end">
    <a href="https://advicegentwo.vercel.app/" target='_blank'>
    <button className="btn btn-accent">Go To Site</button>
      
      </a>

    </div>
  </div>
</div>


     </div>

    
    
    
    
    
    </>
  )
}

export default ProjectsComponent
