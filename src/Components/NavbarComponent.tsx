'use client'


import Image from 'next/image'

import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'


import logo from '../Assets/MHLogo.png'


const NavbarComponent = () => {


    return (
    <Navbar fluid className='text-transparent bg-clip-text bg-teal-500' >
    <Navbar.Brand >
      <Image src={logo} className="mr-2 w-14 lg:w-16 h-auto" alt="Name Logo"/>
    </Navbar.Brand>

    <Navbar.Collapse className='md:ml-[-10%] lg:ml-[-7%]'>
      <Navbar.Link href="#AboutMe" className='text-xl'>About Me</Navbar.Link>
      <Navbar.Link href="#skills" className='text-xl'>Skills</Navbar.Link>
      <Navbar.Link href="#projects" className='text-xl'>Projects</Navbar.Link>
      <Navbar.Link href="#ContactMe" className='text-xl'>Contact Me</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>



    )
}

export default NavbarComponent