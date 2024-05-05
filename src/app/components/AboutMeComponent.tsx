"use client";

import { Button } from "flowbite-react";
import Image from 'next/image'
import React from 'react'
import github from '../Assets/github.jpg'
import email from '../Assets/email.jpg'
import phone from '../Assets/phone.jpg'
import resume from '../Assets/resume.png'
import linkedin from '../Assets/linkedin.webp'

const AboutMeComponent = () => {
  return (
    <>
        <div className="btnRow">
            
            {/* <a href="https://github.com/mkheck13" target='blank'>
                <Button>
                    <Image src={github} className="mr-2 w-14 lg:w-16 h-auto" alt="github logo"/>
                </Button>
            </a> */}
            {/* <a href="https://www.linkedin.com/in/mike-heckerman-08867a306/" target='blank'>
                <Button>
                    <Image src={linkedin} className="mr-2 w-14 lg:w-16 h-auto" alt="github logo"/>
                </Button>
            </a> */}
            {/* <a href="mailto:mkheck@gmail.com" target='blank'>
                <Button>
                    <Image src={email} className="mr-2 w-14 lg:w-16 h-auto" alt="github logo"/>
                </Button>
            </a> */}
            {/* <a href="null" target='blank'>
                <Button>
                    <Image src={resume} className="mr-2 w-14 lg:w-16 h-auto" alt="github logo"/>
                </Button>
            </a> */}
            {/* <a href="tel:209-645-1561" target='blank'>
                <Button>
                    <Image src={phone} className="mr-2 w-14 lg:w-16 h-auto" alt="github logo"/>
                </Button>
            </a> */}

            <Button.Group>
            <Button>
            <a href="https://github.com/mkheck13" target='blank'>
                <Image src={github} className="mr-2 w-14 lg:w-16 h-auto" alt="github logo"/>
                </a>
            </Button>

            <Button>
            <a href="https://www.linkedin.com/in/mike-heckerman-08867a306/" target='blank'>
                <Image src={linkedin} className="mr-2 w-14 lg:w-16 h-auto" alt="github logo"/>
                </a>
            </Button>
            
            <Button>
            <a href="mailto:mkheck@gmail.com" target='blank'>
            <Image src={email} className="mr-2 w-14 lg:w-16 h-auto" alt="github logo"/>
                </a>
            </Button>

            <Button>
            <a href="null" target='blank'>
                <Image src={resume} className="mr-2 w-14 lg:w-16 h-auto" alt="github logo"/>
                </a>
            </Button>

            <Button>
            <a href="tel:209-645-1561" target='blank'>
                <Image src={phone} className="mr-2 w-14 lg:w-16 h-auto" alt="github logo"/>
                </a>
            </Button>

            </Button.Group>
            
           

            








        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
    
    


  )
}

export default AboutMeComponent




