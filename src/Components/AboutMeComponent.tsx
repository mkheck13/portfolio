"use client";

import Image from 'next/image'
import React from 'react'
import {TypeAnimation} from 'react-type-animation'

import headshot from '../Assets/HeadShot.jpg'

export default function AboutMeComponent() {
  return (
    <>
    <section className='pl-20'>
      <div id="AboutMe" className='grid grid-cols-1 sm:grid-cols-12'>
        <div className="col-span-7 place-self-center text-center sm:text-left">
            
          <h1 className='text-white mb-4 text-3xl sm:text-6xl  lg:text-7xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500'>Hi, My name is Michael. I&#39;m a {""} </span>
          <br />
          
          <TypeAnimation
              sequence={[
                "Student",
                2000,
                "Web Developer",
                2000,
                "Mobile Developer",
                2000,
                "Fullstack Developer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          
          
          
          </h1>
          <p className='text-[#bdc9d1] mt-4 sm:text-lg text-base font-medium lg:text-xl mb-6'>Welcome, as I stated before my name is Michael and I am currently enrolled in CodeStack Academy in Stockton, Ca. I have worked with several languages and frameworks on numerous differnt projects. During my time at CodeStack I have taken on the role as Project Manager, front end and back end.</p>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden'>
            <Image
          src={headshot}
          alt='Mike Heckerman'
          height={270}
          width={270}
          className='absolute transform  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          ></Image>
          </div>
          
        </div>
      </div>
      
    </section>

    </>
    
    


  )
}





